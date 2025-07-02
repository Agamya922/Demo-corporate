// HomePage.js
import React, { useState } from 'react';
import './Home.css';

// Custom SVG Icons
const ArrowRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const BarChart3 = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const Shield = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const Zap = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Users = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const CreditCard = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

const FileText = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const Building = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const MessageSquare = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const Newspaper = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
  </svg>
);

const HomePage = ({ setActivePage, openModal }) => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <BarChart3 className="icon-lg" />,
      title: "Real-time Analytics",
      description: "Monitor your corporate credits and lease performance with live dashboards and comprehensive reporting.",
      stats: "99.9% Uptime",
      action: () => setActivePage('dashboard')
    },
    {
      icon: <Shield className="icon-lg" />,
      title: "Compliance Management",
      description: "Stay compliant with automated checks, audit trails, and regulatory reporting features.",
      stats: "100% Compliant",
      action: () => setActivePage('audit')
    },
    {
      icon: <Zap className="icon-lg" />,
      title: "Automated Workflows",
      description: "Streamline credit allocation and lease renewals with intelligent automation and approval workflows.",
      stats: "75% Time Saved",
      action: () => setActivePage('allocation')
    },
    {
      icon: <Users className="icon-lg" />,
      title: "Multi-Department Support",
      description: "Manage credits across all departments with role-based access and customizable permissions.",
      stats: "Unlimited Users",
      action: () => setActivePage('credits')
    }
  ];

  const quickActions = [
    {
      icon: <CreditCard className="icon-md" />,
      title: "Transfer Credits",
      description: "Move credits between departments",
      action: () => openModal('transferModal'),
      color: "blue"
    },
    {
      icon: <FileText className="icon-md" />,
      title: "New Lease Agreement",
      description: "Create a new lease contract",
      action: () => openModal('leaseModal'),
      color: "green"
    },
    {
      icon: <BarChart3 className="icon-md" />,
      title: "Modify Allocation",
      description: "Adjust department allocations",
      action: () => openModal('allocationModal'),
      color: "purple"
    },
    {
      icon: <MessageSquare className="icon-md" />,
      title: "Start Discussion",
      description: "Join the community forum",
      action: () => openModal('forumModal'),
      color: "orange"
    },
    {
      icon: <Building className="icon-md" />,
      title: "Lease Management",
      description: "View and manage all leases",
      action: () => setActivePage('lease'),
      color: "indigo"
    },
    {
      icon: <Newspaper className="icon-md" />,
      title: "Latest News",
      description: "Corporate finance updates",
      action: () => setActivePage('news'),
      color: "red"
    }
  ];

  const stats = [
    { value: "2.4M+", label: "Credits Managed", trend: "+15%" },
    { value: "23", label: "Active Leases", trend: "+8%" },
    { value: "4", label: "Departments", trend: "100%" },
    { value: "99.9%", label: "System Uptime", trend: "Stable" }
  ];

  const recentActivity = [
    { action: "Credit Allocation", department: "Manufacturing", amount: "450K", time: "2 hours ago", status: "completed" },
    { action: "Lease Renewal", department: "IT", amount: "280K", time: "4 hours ago", status: "pending" },
    { action: "Budget Transfer", department: "R&D", amount: "320K", time: "6 hours ago", status: "approved" },
    { action: "Compliance Check", department: "Operations", amount: "—", time: "1 day ago", status: "completed" }
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Corporate
              <span className="hero-title-gradient"> Credit Hub</span>
            </h1>
            <p className="hero-description">
              Streamline your corporate credit management, lease agreements, and departmental allocations with our comprehensive platform.
            </p>
            <div className="hero-buttons">
              <button 
                onClick={() => setActivePage('dashboard')}
                className="btn btn-primary hero-btn-primary"
              >
                Access Dashboard
                <ArrowRight className="icon-sm btn-icon" />
              </button>
              <button 
                onClick={() => setActivePage('news')}
                className="btn btn-secondary"
              >
                View Latest News
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-trend">{stat.trend}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="quick-actions-section">
        <div className="section-header">
          <h2 className="section-title">Quick Actions</h2>
          <p className="section-description">Access key features and start common tasks instantly</p>
        </div>
        
        <div className="quick-actions-grid">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="quick-action-card"
            >
              <div className="quick-action-content">
                <div className={`quick-action-icon ${action.color}`}>
                  {action.icon}
                </div>
                <div className="quick-action-text">
                  <h3 className="quick-action-title">
                    {action.title}
                  </h3>
                  <p className="quick-action-description">{action.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="section-header">
          <h2 className="features-title">
            Powerful Features for Modern Enterprises
          </h2>
          <p className="features-description">
            Every tool you need to manage corporate credits, leases, and compliance in one integrated platform.
          </p>
        </div>

        <div className="features-content">
          <div className="features-list">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`feature-item ${activeFeature === index ? 'active' : ''}`}
                onClick={() => {
                  setActiveFeature(index);
                  if (feature.action) feature.action();
                }}
              >
                <div className="feature-item-content">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <div className="feature-text">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                    <div className="feature-stats">{feature.stats}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="feature-showcase">
            <div className="feature-showcase-content">
              <div className="feature-showcase-icon">
                {features[activeFeature].icon}
              </div>
              <h3 className="feature-showcase-title">{features[activeFeature].title}</h3>
              <p className="feature-showcase-description">{features[activeFeature].description}</p>
              <button 
                onClick={features[activeFeature].action}
                className="btn btn-primary"
              >
                Explore Feature
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="recent-activity-section">
        <div className="recent-activity-container">
          <div className="recent-activity-header">
            <h2 className="section-title">Recent Activity</h2>
            <button 
              onClick={() => setActivePage('dashboard')}
              className="view-dashboard-btn"
            >
              View Full Dashboard
              <ArrowRight className="icon-sm" />
            </button>
          </div>

          <div className="activity-list">
            {recentActivity.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className="activity-left">
                  <div className={`activity-status ${activity.status}`}></div>
                  <div className="activity-details">
                    <div className="activity-action">{activity.action}</div>
                    <div className="activity-department">{activity.department}</div>
                  </div>
                </div>
                <div className="activity-right">
                  <div className="activity-amount">{activity.amount}</div>
                  <div className="activity-time">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Links Section */}
     <div className="nav-links-section">
  <div className="nav-links-grid">

    <div onClick={() => setActivePage('credits')} className="nav-link-card">
      <div className="nav-link-icon blue">💳</div>
      <h3 className="nav-link-title">Credit Management</h3>
      <p className="nav-link-description">View and manage all corporate credits across departments</p>
      <div className="nav-link-action blue">Manage Credits →</div>
    </div>

    <div onClick={() => setActivePage('allocation')} className="nav-link-card">
      <div className="nav-link-icon green">📊</div>
      <h3 className="nav-link-title">Allocation</h3>
      <p className="nav-link-description">Allocate and redistribute credits between departments</p>
      <div className="nav-link-action green">View Allocations →</div>
    </div>

    <div onClick={() => setActivePage('lease')} className="nav-link-card">
      <div className="nav-link-icon purple">🏢</div>
      <h3 className="nav-link-title">Lease Management</h3>
      <p className="nav-link-description">Manage all lease agreements and renewals</p>
      <div className="nav-link-action purple">Manage Leases →</div>
    </div>

    <div onClick={() => setActivePage('audit')} className="nav-link-card">
      <div className="nav-link-icon success">🕵️‍♂️</div>
      <h3 className="nav-link-title">Audit</h3>
      <p className="nav-link-description">Track audit trails and generate compliance reports</p>
      <div className="nav-link-action success">View Audits →</div>
    </div>

    <div onClick={() => setActivePage('news')} className="nav-link-card">
      <div className="nav-link-icon teal">📰</div>
      <h3 className="nav-link-title">News</h3>
      <p className="nav-link-description">Stay updated with the latest industry and company news</p>
      <div className="nav-link-action teal">Read News →</div>
    </div>

    <div onClick={() => setActivePage('forum')} className="nav-link-card">
      <div className="nav-link-icon orange">💬</div>
      <h3 className="nav-link-title">Community Forum</h3>
      <p className="nav-link-description">Join discussions and share insights with colleagues</p>
      <div className="nav-link-action orange">Join Forum →</div>
    </div>

  </div>
</div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Credit Management?</h2>
          <p className="cta-description">
            Join thousands of companies already using our platform to streamline their corporate credit operations.
          </p>
          <div className="cta-buttons">
            <button 
              onClick={() => setActivePage('audit')}
              className="btn btn-white"
            >
              View Audit Reports
            </button>
            <button 
              onClick={() => setActivePage('news')}
              className="btn btn-outline-white"
            >
              Latest Updates
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="footer"> */}
        <div className="footer-content">
          <div className="footer-grid">
            {/* <div className="footer-brand">
              <h3 className="footer-brand-title">Corporate Credit Hub</h3>
              <p className="footer-brand-description">
                The complete solution for corporate credit management and lease administration.
              </p>
            </div>
            <div className="footer-column">
              <h4 className="footer-column-title">Platform</h4>
              <ul className="footer-links">
                <li><button onClick={() => setActivePage('dashboard')} className="footer-link">Dashboard</button></li>
                <li><button onClick={() => setActivePage('credits')} className="footer-link">Credits</button></li>
                <li><button onClick={() => setActivePage('allocation')} className="footer-link">Allocation</button></li>
                <li><button onClick={() => setActivePage('audit')} className="footer-link">Compliance</button></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-column-title">Features</h4>
              <ul className="footer-links">
                <li><button onClick={() => setActivePage('lease')} className="footer-link">Lease Management</button></li>
                <li><button onClick={() => setActivePage('forum')} className="footer-link">Community Forum</button></li>
                <li><button onClick={() => setActivePage('news')} className="footer-link">News & Updates</button></li>
                <li><button onClick={() => openModal('transferModal')} className="footer-link">Quick Transfer</button></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-column-title">Quick Actions</h4>
              <ul className="footer-links">
                <li><button onClick={() => openModal('allocationModal')} className="footer-link">Modify Allocation</button></li>
                <li><button onClick={() => openModal('leaseModal')} className="footer-link">New Lease</button></li>
                <li><button onClick={() => openModal('forumModal')} className="footer-link">Start Discussion</button></li>
                <li><button onClick={() => setActivePage('audit')} className="footer-link">Compliance Check</button></li>
              </ul>
            </div> */}
          </div>
          {/* <div className="footer-bottom">
            <p>&copy; 2025 Corporate Credit Hub. All rights reserved.</p>
          </div> */}
        </div>
      {/* </footer> */}
    </div>
  );
};

export default HomePage;