import React, { useState, useMemo } from 'react';
import './News.css';

// Move newsItems outside the component to prevent recreation on every render
const NEWS_ITEMS = [
  {
    id: 1,
    title: "MSCI Projects Carbon Credit Market to Reach $35 Billion by 2030",
    summary: "New analysis suggests the frozen carbon credit market may thaw significantly, with projections showing potential growth from $1.5B to $35B by decade's end.",
    date: "2025-06-28",
    category: "Market Analysis",
    importance: "high",
    source: "MSCI Research",
    readTime: "4 min",
    icon: "📈"
  },
  {
    id: 2,
    title: "China Approves 9.5 Million Tons of New Carbon Credits for 2025",
    summary: "China's carbon credit market revival includes nine new projects expected to supply substantial credits amid price volatility and future expansion plans.",
    date: "2025-06-27",
    category: "Regulatory",
    importance: "high",
    source: "Carbon Credits News",
    readTime: "3 min",
    icon: "🌍"
  },
  {
    id: 3,
    title: "COP30 Momentum Builds as June 2025 Climate Events Accelerate",
    summary: "Major climate events throughout June are bringing together governments and businesses to accelerate progress on climate commitments ahead of COP30.",
    date: "2025-06-26",
    category: "Policy",
    importance: "high",
    source: "NewClimate Institute",
    readTime: "5 min",
    icon: "👥"
  },
  {
    id: 4,
    title: "Carbon Credit Market Poised for 37.68% Growth Rate Through 2034",
    summary: "Latest market research indicates the global carbon credit sector will experience significant expansion with major players including 3Degrees and EKI Energy leading growth.",
    date: "2025-06-25",
    category: "Market Analysis",
    importance: "medium",
    source: "Precedence Research",
    readTime: "6 min",
    icon: "💰"
  },
  {
    id: 5,
    title: "EU Climate Policy Omnibus Package Negotiations Continue",
    summary: "European Parliament expected to deliver draft report by June 6, with trilogues anticipated over summer for CSRD and CSDDD amendments.",
    date: "2025-06-24",
    category: "Regulatory",
    importance: "medium",
    source: "EDF+Business",
    readTime: "4 min",
    icon: "📄"
  },
  {
    id: 6,
    title: "Renewable Energy Credits (RECs) Drive Market Diversification",
    summary: "RECs from wind, solar, hydroelectric and biomass projects are becoming increasingly important in the broader carbon credit ecosystem.",
    date: "2025-06-23",
    category: "Technology",
    importance: "medium",
    source: "FinTech Magazine",
    readTime: "3 min",
    icon: "⚡"
  },
  {
    id: 7,
    title: "Carbon Removal Credits Market Could Reach $11 Billion by 2030",
    summary: "MSCI projects significant value creation in carbon removal sector, with technologies like direct air capture gaining traction among investors.",
    date: "2025-06-22",
    category: "Technology",
    importance: "high",
    source: "Climeworks Analysis",
    readTime: "5 min",
    icon: "🌿"
  },
  {
    id: 8,
    title: "House Passes Budget Reconciliation Package with Climate Provisions",
    summary: "Recent passage includes significant changes to climate policy framework, with EDF releasing statement on bill's implications for carbon markets.",
    date: "2025-06-21",
    category: "Policy",
    importance: "medium",
    source: "EDF Analysis",
    readTime: "4 min",
    icon: "✅"
  },
  {
    id: 9,
    title: "Voluntary Carbon Market Database Shows 200,000+ Credit Transactions",
    summary: "AlliedOffsets data reveals substantial transaction volume despite continued price decline trends across voluntary carbon markets.",
    date: "2025-06-20",
    category: "Market Analysis",
    importance: "medium",
    source: "AlliedOffsets",
    readTime: "3 min",
    icon: "💰"
  },
  {
    id: 10,
    title: "Climate Finance Summit Addresses $250B Market Target by 2050",
    summary: "Industry leaders discuss pathways to reach ambitious carbon credit market valuation targets through enhanced transparency and efficiency.",
    date: "2025-06-19",
    category: "Business",
    importance: "medium",
    source: "Industry Summit",
    readTime: "4 min",
    icon: "📈"
  },
  {
    id: 11,
    title: "Brazil's Belém Prepares to Host Critical COP30 Climate Conference",
    summary: "The Amazonian city will be the global focus for climate action in November 2025, hosting one of the most significant UN climate conferences in recent years.",
    date: "2025-06-18",
    category: "Policy",
    importance: "high",
    source: "UN News",
    readTime: "5 min",
    icon: "🌍"
  },
  {
    id: 12,
    title: "Permitting Reform Discussions Resume for Clean Energy Projects",
    summary: "Bipartisan negotiations on streamlining energy project approvals could begin anew as climate policy advocates push for faster grid connections.",
    date: "2025-06-17",
    category: "Regulatory",
    importance: "medium",
    source: "Yale Climate Connections",
    readTime: "4 min",
    icon: "⚡"
  },
  {
    id: 13,
    title: "Platform Maintenance: Enhanced Security Protocols Implemented",
    summary: "Scheduled maintenance completed successfully with new security features and improved transaction processing capabilities now active.",
    date: "2025-06-16",
    category: "Technical",
    importance: "low",
    source: "System Operations",
    readTime: "2 min",
    icon: "✅"
  },
  {
    id: 14,
    title: "ForestCarbon and Climate Partner Expand Partnership Network",
    summary: "Strategic alliances among major carbon credit players are reshaping market dynamics and expanding project portfolios globally.",
    date: "2025-06-15",
    category: "Business",
    importance: "medium",
    source: "ResearchAndMarkets",
    readTime: "3 min",
    icon: "👥"
  },
  {
    id: 15,
    title: "Paris Agreement Targets Drive 2025 Transformation Strategy",
    summary: "Global Center on Adaptation identifies 2025 as pivotal year for climate justice, financing, and international cooperation initiatives.",
    date: "2025-06-14",
    category: "Policy",
    importance: "high",
    source: "Global Center on Adaptation",
    readTime: "6 min",
    icon: "🌍"
  },
  {
    id: 16,
    title: "API Documentation Update: Enhanced Developer Tools Released",
    summary: "New API features include improved rate limiting, enhanced authentication, and expanded webhook capabilities for seamless integrations.",
    date: "2025-06-13",
    category: "Technical",
    importance: "low",
    source: "Development Team",
    readTime: "3 min",
    icon: "📄"
  },
  {
    id: 17,
    title: "Climate Risk Assessment Tools Gain Enterprise Adoption",
    summary: "Businesses increasingly implementing advanced carbon tracking and risk assessment platforms to meet regulatory requirements and investor expectations.",
    date: "2025-06-12",
    category: "Technology",
    importance: "medium",
    source: "Enterprise Survey",
    readTime: "4 min",
    icon: "⚠️"
  }
];

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImportance, setSelectedImportance] = useState('All');
  const [sortBy, setSortBy] = useState('date');

  const categories = ['All', 'Market Analysis', 'Regulatory', 'Policy', 'Technology', 'Business', 'Technical'];
  const importanceOptions = ['All', 'high', 'medium', 'low'];

  // Now we can remove newsItems from the dependencies since it's static
  const filteredAndSortedNews = useMemo(() => {
    let filtered = NEWS_ITEMS.filter(item => {
      const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
      const importanceMatch = selectedImportance === 'All' || item.importance === selectedImportance;
      return categoryMatch && importanceMatch;
    });

    return filtered.sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date) - new Date(a.date);
      } else if (sortBy === 'importance') {
        const importanceOrder = { high: 3, medium: 2, low: 1 };
        return importanceOrder[b.importance] - importanceOrder[a.importance];
      }
      return 0;
    });
  }, [selectedCategory, selectedImportance, sortBy]); // Removed newsItems from dependencies

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getImportanceBadgeClass = (importance) => {
    switch (importance) {
      case 'high': return 'importance-badge high';
      case 'medium': return 'importance-badge medium';
      case 'low': return 'importance-badge low';
      default: return 'importance-badge';
    }
  };

  const getCategoryClass = (category) => {
    const categoryClasses = {
      'Market Analysis': 'category-badge market-analysis',
      'Regulatory': 'category-badge regulatory',
      'Policy': 'category-badge policy',
      'Technology': 'category-badge technology',
      'Business': 'category-badge business',
      'Technical': 'category-badge technical'
    };
    return categoryClasses[category] || 'category-badge default';
  };

  return (
    <div className="news-container">
      <div className="news-wrapper">
        {/* Header */}
        <div className="news-header">
          <h1 className="news-title">Carbon Credit Market News</h1>
          <p className="news-subtitle">
            Stay updated with the latest developments in carbon markets, climate policy, and environmental technology
          </p>
        </div>

        {/* Filters */}
        <div className="filters-container">
          <div className="filters-wrapper">
            <div className="filter-group">
              <span className="filter-icon">🔍</span>
              <span className="filter-label">Filters:</span>
            </div>
            
            <div className="filter-item">
              <label className="filter-item-label">Category:</label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="filter-item">
              <label className="filter-item-label">Importance:</label>
              <select 
                value={selectedImportance} 
                onChange={(e) => setSelectedImportance(e.target.value)}
                className="filter-select"
              >
                {importanceOptions.map(imp => (
                  <option key={imp} value={imp}>
                    {imp === 'All' ? 'All' : imp.charAt(0).toUpperCase() + imp.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-item">
              <label className="filter-item-label">Sort by:</label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="date">Date</option>
                <option value="importance">Importance</option>
              </select>
            </div>

            <div className="article-count">
              {filteredAndSortedNews.length} articles
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="news-grid">
          {filteredAndSortedNews.map(item => {
            return (
              <article key={item.id} className="news-card">
                <div className="news-card-content">
                  <div className="news-card-header">
                    <div className="news-icon-wrapper">
                      <div className="news-icon-container">
                        <span className="news-icon">{item.icon}</span>
                      </div>
                    </div>
                    <span className={getImportanceBadgeClass(item.importance)}>
                      {item.importance.charAt(0).toUpperCase() + item.importance.slice(1)}
                    </span>
                  </div>

                  <h3 className="news-card-title">
                    {item.title}
                  </h3>
                  
                  <p className="news-card-summary">
                    {item.summary}
                  </p>

                  <div className="news-card-meta">
                    <div className="meta-row">
                      <span className={getCategoryClass(item.category)}>
                        {item.category}
                      </span>
                      <div className="read-time">
                        <span className="read-time-icon">🕒</span>
                        {item.readTime}
                      </div>
                    </div>

                    <div className="meta-footer">
                      <div className="news-date">
                        <span className="date-icon">📅</span>
                        {formatDate(item.date)}
                      </div>
                      <div className="news-source">
                        {item.source}
                      </div>
                    </div>

                    <button className="read-more-btn">
                      Read Full Article
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filteredAndSortedNews.length === 0 && (
          <div className="empty-state">
            <span className="empty-state-icon">❗</span>
            <h3 className="empty-state-title">No articles found</h3>
            <p className="empty-state-text">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;