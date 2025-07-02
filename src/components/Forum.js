import React, { useState, useMemo } from 'react';
import './Forum.css';

// Move static data outside component to prevent recreation on every render
const DISCUSSIONS = [
  {
    id: 1,
    title: "Best practices for quarterly budget allocation",
    author: "Sarah Chen",
    replies: 23,
    views: 456,
    lastActivity: "2 hours ago",
    category: "Budget Management",
    isPinned: true,
    hasNewReplies: true,
    tags: ["budget", "quarterly", "allocation"]
  },
  {
    id: 2,
    title: "New compliance requirements for Q2 2025",
    author: "Mike Rodriguez",
    replies: 15,
    views: 234,
    lastActivity: "1 day ago",
    category: "Legal & Compliance",
    isPinned: false,
    hasNewReplies: true,
    tags: ["compliance", "2025", "requirements"]
  },
  {
    id: 3,
    title: "Audit preparation checklist - what are we missing?",
    author: "Jennifer Liu",
    replies: 8,
    views: 189,
    lastActivity: "3 days ago",
    category: "Audit & Compliance",
    isPinned: false,
    hasNewReplies: false,
    tags: ["audit", "checklist", "preparation"]
  },
  {
    id: 4,
    title: "How to handle multi-currency transactions in reporting",
    author: "David Park",
    replies: 31,
    views: 672,
    lastActivity: "4 hours ago",
    category: "Financial Reporting",
    isPinned: false,
    hasNewReplies: true,
    tags: ["currency", "reporting", "transactions"]
  },
  {
    id: 5,
    title: "Year-end closing procedures and common pitfalls",
    author: "Amanda Thompson",
    replies: 42,
    views: 891,
    lastActivity: "6 hours ago",
    category: "Best Practices",
    isPinned: true,
    hasNewReplies: true,
    tags: ["year-end", "closing", "procedures"]
  },
  {
    id: 6,
    title: "Integration challenges with new ERP system",
    author: "Robert Kim",
    replies: 19,
    views: 345,
    lastActivity: "1 day ago",
    category: "Technology",
    isPinned: false,
    hasNewReplies: false,
    tags: ["ERP", "integration", "technology"]
  },
  {
    id: 7,
    title: "Remote team collaboration best practices",
    author: "Lisa Martinez",
    replies: 27,
    views: 523,
    lastActivity: "2 days ago",
    category: "Team Management",
    isPinned: false,
    hasNewReplies: true,
    tags: ["remote", "collaboration", "team"]
  },
  {
    id: 8,
    title: "Cost center allocation methodologies discussion",
    author: "James Wilson",
    replies: 12,
    views: 267,
    lastActivity: "3 days ago",
    category: "Budget Management",
    isPinned: false,
    hasNewReplies: false,
    tags: ["cost-center", "allocation", "methodology"]
  },
  {
    id: 9,
    title: "Tax implications of new business structure",
    author: "Maria Garcia",
    replies: 35,
    views: 698,
    lastActivity: "5 hours ago",
    category: "Legal & Compliance",
    isPinned: false,
    hasNewReplies: true,
    tags: ["tax", "business-structure", "implications"]
  },
  {
    id: 10,
    title: "Automating monthly financial reports - tools and tips",
    author: "Kevin Chang",
    replies: 24,
    views: 445,
    lastActivity: "1 day ago",
    category: "Technology",
    isPinned: false,
    hasNewReplies: true,
    tags: ["automation", "reports", "tools"]
  },
  {
    id: 11,
    title: "Internal controls framework implementation",
    author: "Nicole Brown",
    replies: 16,
    views: 312,
    lastActivity: "2 days ago",
    category: "Audit & Compliance",
    isPinned: false,
    hasNewReplies: false,
    tags: ["internal-controls", "framework", "implementation"]
  },
  {
    id: 12,
    title: "Cash flow forecasting during uncertain times",
    author: "Thomas Anderson",
    replies: 29,
    views: 567,
    lastActivity: "7 hours ago",
    category: "Financial Planning",
    isPinned: false,
    hasNewReplies: true,
    tags: ["cash-flow", "forecasting", "uncertainty"]
  },
  {
    id: 13,
    title: "Professional development opportunities in finance",
    author: "Rachel Green",
    replies: 38,
    views: 743,
    lastActivity: "4 days ago",
    category: "Career Development",
    isPinned: false,
    hasNewReplies: false,
    tags: ["professional-development", "finance", "career"]
  },
  {
    id: 14,
    title: "Vendor payment optimization strategies",
    author: "Steven Lee",
    replies: 21,
    views: 389,
    lastActivity: "1 day ago",
    category: "Best Practices",
    isPinned: false,
    hasNewReplies: true,
    tags: ["vendor", "payment", "optimization"]
  },
  {
    id: 15,
    title: "Risk assessment methodologies for new projects",
    author: "Emma Davis",
    replies: 33,
    views: 612,
    lastActivity: "3 days ago",
    category: "Risk Management",
    isPinned: false,
    hasNewReplies: false,
    tags: ["risk-assessment", "projects", "methodology"]
  }
];

const CATEGORIES = [
  { name: "Budget Management", count: 2, color: "#3B82F6" },
  { name: "Legal & Compliance", count: 2, color: "#8B5CF6" },
  { name: "Audit & Compliance", count: 2, color: "#06B6D4" },
  { name: "Best Practices", count: 2, color: "#10B981" },
  { name: "Financial Reporting", count: 1, color: "#F59E0B" },
  { name: "Technology", count: 2, color: "#EF4444" },
  { name: "Team Management", count: 1, color: "#EC4899" },
  { name: "Financial Planning", count: 1, color: "#84CC16" },
  { name: "Career Development", count: 1, color: "#F97316" },
  { name: "Risk Management", count: 1, color: "#6366F1" }
];

const Forum = ({ openModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('lastActivity');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...CATEGORIES.map(cat => cat.name)];

  const filteredAndSortedDiscussions = useMemo(() => {
    let filtered = DISCUSSIONS.filter(discussion => {
      const categoryMatch = selectedCategory === 'All' || discussion.category === selectedCategory;
      const searchMatch = searchTerm === '' || 
        discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        discussion.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        discussion.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return categoryMatch && searchMatch;
    });

    // Sort pinned discussions first, then by selected criteria
    return filtered.sort((a, b) => {
      // Pinned discussions always come first
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;

      // Then sort by selected criteria
      if (sortBy === 'lastActivity') {
        // For demo purposes, using a simple time comparison
        const timeValues = {
          'hours ago': 1,
          'day ago': 24,
          'days ago': 72
        };
        const aTime = Object.keys(timeValues).find(key => a.lastActivity.includes(key)) || 'hours ago';
        const bTime = Object.keys(timeValues).find(key => b.lastActivity.includes(key)) || 'hours ago';
        const aHours = parseInt(a.lastActivity) * (timeValues[aTime] || 1);
        const bHours = parseInt(b.lastActivity) * (timeValues[bTime] || 1);
        return aHours - bHours;
      } else if (sortBy === 'replies') {
        return b.replies - a.replies;
      } else if (sortBy === 'views') {
        return b.views - a.views;
      }
      return 0;
    });
  }, [selectedCategory, sortBy, searchTerm]);

  const totalStats = useMemo(() => {
    const totalDiscussions = DISCUSSIONS.length;
    const totalReplies = DISCUSSIONS.reduce((sum, discussion) => sum + discussion.replies, 0);
    const totalViews = DISCUSSIONS.reduce((sum, discussion) => sum + discussion.views, 0);
    
    return {
      discussions: totalDiscussions,
      posts: totalDiscussions + totalReplies,
      views: totalViews
    };
  }, []);

  return (
    <div className="forum-container">
      <div className="forum-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Community Forum</h1>
            <p>Connect, share knowledge, and discuss best practices with fellow professionals</p>
          </div>
          <button 
            className="start-discussion-btn"
            onClick={() => openModal('forumModal')}
          >
            + Start Discussion
          </button>
        </div>
      </div>

      <div className="forum-stats">
        <div className="stat-item">
          <div className="stat-number">{totalStats.discussions}</div>
          <div className="stat-label">Total Discussions</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{totalStats.posts.toLocaleString()}</div>
          <div className="stat-label">Total Posts</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{Math.floor(totalStats.views / 100)}</div>
          <div className="stat-label">Active Members</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{totalStats.views.toLocaleString()}</div>
          <div className="stat-label">Total Views</div>
        </div>
      </div>

      <div className="forum-section">
        <h2>Popular Categories</h2>
        <div className="categories-grid">
          {CATEGORIES.map((category, index) => (
            <div 
              key={index} 
              className="category-card"
              onClick={() => setSelectedCategory(category.name)}
              style={{ '--category-color': category.color }}
            >
              <div className="category-icon" style={{ backgroundColor: category.color }}>
                📁
              </div>
              <div className="category-info">
                <h3 className="category-name">{category.name}</h3>
                <p className="category-count">{category.count} discussions</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="forum-section">
        <div className="section-header">
          <h2>Recent Discussions</h2>
          <div className="forum-controls">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search discussions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <span className="search-icon">🔍</span>
            </div>
            
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="lastActivity">Latest Activity</option>
              <option value="replies">Most Replies</option>
              <option value="views">Most Views</option>
            </select>
          </div>
        </div>

        <div className="discussions-list">
          {filteredAndSortedDiscussions.map(discussion => (
            <div key={discussion.id} className={`discussion-item ${discussion.isPinned ? 'pinned' : ''}`}>
              <div className="discussion-status">
                {discussion.isPinned && <span className="pin-icon">📌</span>}
                {discussion.hasNewReplies && <span className="new-indicator">●</span>}
              </div>
              
              <div className="discussion-main">
                <div className="discussion-header">
                  <h3 className="discussion-title">{discussion.title}</h3>
                  <div className="discussion-tags">
                    {discussion.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="tag">#{tag}</span>
                    ))}
                  </div>
                </div>
                
                <div className="discussion-meta">
                  <span className="meta-item">
                    <span className="meta-icon">👤</span>
                    By {discussion.author}
                  </span>
                  <span className="meta-item">
                    <span className="meta-icon">📂</span>
                    {discussion.category}
                  </span>
                  <span className="meta-item">
                    <span className="meta-icon">💬</span>
                    {discussion.replies} replies
                  </span>
                  <span className="meta-item">
                    <span className="meta-icon">👁️</span>
                    {discussion.views} views
                  </span>
                  <span className="meta-item">
                    <span className="meta-icon">🕒</span>
                    {discussion.lastActivity}
                  </span>
                </div>
              </div>

              <div className="discussion-stats">
                <div className="stat">
                  <div className="stat-value">{discussion.replies}</div>
                  <div className="stat-label">Replies</div>
                </div>
                <div className="stat">
                  <div className="stat-value">{discussion.views}</div>
                  <div className="stat-label">Views</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAndSortedDiscussions.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">💬</div>
            <h3>No discussions found</h3>
            <p>Try adjusting your search terms or filters to find what you're looking for.</p>
          </div>
        )}

        <div className="forum-pagination">
          <span className="pagination-info">
            Showing {filteredAndSortedDiscussions.length} of {DISCUSSIONS.length} discussions
          </span>
        </div>
      </div>
    </div>
  );
};

export default Forum;