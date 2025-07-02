import React, { useState } from 'react';
import Card from './Card';
import Table from './Table';
// import Home from './Home';
import './Dashboard.css';

const Dashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('month');
  const [activeTab, setActiveTab] = useState('overview');

  const dashboardCards = [
    {
      title: 'Total Credits Available',
      icon: '💰',
      value: '2,450,000',
      change: '+15% from last quarter',
      changeType: 'positive'
    },
    {
      title: 'Credits Allocated',
      icon: '📊',
      value: '1,890,000',
      change: '77% utilization',
      changeType: 'positive',
      progress: 77,
      className: 'allocation-card'
    },
    {
      title: 'Active Leases',
      icon: '🏢',
      value: '23',
      change: '$4.2M total value',
      changeType: 'positive',
      className: 'lease-card'
    },
    {
      title: 'Pending Approvals',
      icon: '⏳',
      value: '8',
      change: 'Requires attention',
      changeType: 'warning'
    }
  ];

  const recentTransactions = {
    headers: ['Date', 'Type', 'Department', 'Amount', 'Status', 'Reference'],
    rows: [
      {
        date: '2025-06-14',
        type: 'Credit Allocation',
        department: 'Manufacturing',
        amount: '450,000 Credits',
        status: { text: 'Active', type: 'active' },
        reference: '#CA-2025-001'
      },
      {
        date: '2025-06-13',
        type: 'Lease Agreement',
        department: 'Operations',
        amount: '850,000 Credits',
        status: { text: 'Approved', type: 'approved' },
        reference: '#LA-2025-045'
      },
      {
        date: '2025-06-12',
        type: 'Budget Transfer',
        department: 'R&D',
        amount: '280,000 Credits',
        status: { text: 'Pending', type: 'pending' },
        reference: '#BT-2025-089'
      },
      {
        date: '2025-06-11',
        type: 'Equipment Lease',
        department: 'IT',
        amount: '125,000 Credits',
        status: { text: 'Active', type: 'active' },
        reference: '#EL-2025-156'
      },
      {
        date: '2025-06-10',
        type: 'Credit Renewal',
        department: 'Sales',
        amount: '320,000 Credits',
        status: { text: 'Approved', type: 'approved' },
        reference: '#CR-2025-078'
      }
    ]
  };

  const departmentBreakdown = {
    headers: ['Department', 'Allocated Credits', 'Utilization', 'Active Leases', 'Monthly Spend'],
    rows: [
      {
        department: 'Manufacturing',
        allocated: '680,000',
        utilization: '85%',
        leases: '8',
        spend: '$245,000'
      },
      {
        department: 'Operations',
        allocated: '520,000',
        utilization: '72%',
        leases: '6',
        spend: '$187,500'
      },
      {
        department: 'R&D',
        allocated: '415,000',
        utilization: '63%',
        leases: '4',
        spend: '$98,200'
      },
      {
        department: 'IT',
        allocated: '275,000',
        utilization: '91%',
        leases: '5',
        spend: '$156,800'
      }
    ]
  };

  const upcomingRenewals = {
    headers: ['Lease ID', 'Asset', 'Department', 'Renewal Date', 'Amount', 'Action'],
    rows: [
      {
        leaseId: '#LA-2023-012',
        asset: 'Manufacturing Equipment',
        department: 'Manufacturing',
        renewalDate: '2025-07-15',
        amount: '450,000 Credits',
        action: 'Review Required'
      },
      {
        leaseId: '#LA-2023-028',
        asset: 'Server Infrastructure',
        department: 'IT',
        renewalDate: '2025-08-02',
        amount: '280,000 Credits',
        action: 'Auto-Renew'
      },
      {
        leaseId: '#LA-2023-041',
        asset: 'Office Space',
        department: 'Operations',
        renewalDate: '2025-08-30',
        amount: '320,000 Credits',
        action: 'Negotiate'
      }
    ]
  };

  const complianceAlerts = [
    {
      id: 1,
      type: 'warning',
      title: 'Credit Limit Approaching',
      message: 'Manufacturing department at 85% credit utilization',
      date: '2025-06-14',
      priority: 'medium'
    },
    {
      id: 2,
      type: 'info',
      title: 'Lease Renewal Due',
      message: '3 leases require renewal within 30 days',
      date: '2025-06-13',
      priority: 'high'
    },
    {
      id: 3,
      type: 'success',
      title: 'Audit Completed',
      message: 'Q2 financial audit completed successfully',
      date: '2025-06-12',
      priority: 'low'
    }
  ];

  // const quickActions = [
  //   { title: 'Allocate Credits', icon: '💳', action: 'allocate' },
  //   { title: 'New Lease Request', icon: '📝', action: 'lease' },
  //   { title: 'Generate Report', icon: '📊', action: 'report' },
  //   { title: 'Review Approvals', icon: '✅', action: 'approve' },
  //   { title: 'Budget Planning', icon: '📈', action: 'budget' },
  //   { title: 'Compliance Check', icon: '🛡️', action: 'compliance' }
  // ];

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        {/* Header Section */}
        <div className="dashboard-header">
          <div className="header-content">
            <h1 className="dashboard-title">Corporate Dashboard</h1>
            <p className="dashboard-subtitle">
              Overview of your corporate credit activities, allocations, and lease management.
            </p>
          </div>
          <div className="header-controls">
            <select 
              value={selectedTimeframe} 
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="timeframe-selector"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="cards-grid">
          {dashboardCards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>

        {/* Quick Actions */}
        {/* <div className="quick-actions-section">
          <h2 className="section-title">Quick Actions</h2>
          <div className="quick-actions-grid">
            {quickActions.map((action, index) => (
              <button key={index} className="quick-action-card">
                <span className="action-icon">{action.icon}</span>
                <span className="action-title">{action.title}</span>
              </button>
            ))}
          </div>
        </div> */}

        {/* Navigation Tabs */}
        <div className="dashboard-tabs">
          <button 
            className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab ${activeTab === 'departments' ? 'active' : ''}`}
            onClick={() => setActiveTab('departments')}
          >
            Departments
          </button>
          <button 
            className={`tab ${activeTab === 'renewals' ? 'active' : ''}`}
            onClick={() => setActiveTab('renewals')}
          >
            Renewals
          </button>
          <button 
            className={`tab ${activeTab === 'compliance' ? 'active' : ''}`}
            onClick={() => setActiveTab('compliance')}
          >
            Compliance
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'overview' && (
            <>
              <div className="table-section">
                <div className="section-header">
                  <h2 className="section-title">Recent Transactions</h2>
                  <button className="view-all-btn">View All</button>
                </div>
                <Table data={recentTransactions} />
              </div>

              <div className="alerts-section">
                <h2 className="section-title">System Alerts</h2>
                <div className="alerts-container">
                  {complianceAlerts.map((alert) => (
                    <div key={alert.id} className={`alert alert-${alert.type}`}>
                      <div className="alert-content">
                        <h4 className="alert-title">{alert.title}</h4>
                        <p className="alert-message">{alert.message}</p>
                        <span className="alert-date">{alert.date}</span>
                      </div>
                      <span className={`alert-priority priority-${alert.priority}`}>
                        {alert.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'departments' && (
            <div className="table-section">
              <div className="section-header">
                <h2 className="section-title">Department Breakdown</h2>
                <button className="export-btn">Export Data</button>
              </div>
              <Table data={departmentBreakdown} />
            </div>
          )}

          {activeTab === 'renewals' && (
            <div className="table-section">
              <div className="section-header">
                <h2 className="section-title">Upcoming Lease Renewals</h2>
                <button className="schedule-btn">Schedule Review</button>
              </div>
              <Table data={upcomingRenewals} />
            </div>
          )}

          {activeTab === 'compliance' && (
            <div className="compliance-section">
              <div className="compliance-overview">
                <h2 className="section-title">Compliance Overview</h2>
                <div className="compliance-cards">
                  <div className="compliance-card">
                    <h3>Regulatory Status</h3>
                    <div className="status-indicator status-good">✅ Compliant</div>
                    <p>All regulatory requirements met</p>
                  </div>
                  <div className="compliance-card">
                    <h3>Audit Schedule</h3>
                    <div className="status-indicator status-warning">⚠️ Due Soon</div>
                    <p>Next audit due in 45 days</p>
                  </div>
                  <div className="compliance-card">
                    <h3>Documentation</h3>
                    <div className="status-indicator status-good">✅ Current</div>
                    <p>All documents up to date</p>
                  </div>
                </div>
              </div>
              
              <div className="recent-audits">
                <h3>Recent Compliance Activities</h3>
                <div className="audit-timeline">
                  <div className="timeline-item">
                    <div className="timeline-date">2025-06-12</div>
                    <div className="timeline-content">
                      <h4>Q2 Financial Audit</h4>
                      <p>Completed successfully with no major findings</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-date">2025-06-05</div>
                    <div className="timeline-content">
                      <h4>Credit Policy Review</h4>
                      <p>Updated credit allocation policies</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-date">2025-05-28</div>
                    <div className="timeline-content">
                      <h4>Lease Agreement Audit</h4>
                      <p>Reviewed all active lease agreements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="dashboard-footer">
          <div className="footer-stats">
            <span>Last Updated: {new Date().toLocaleString()}</span>
            <span>System Status: ✅ Operational</span>
          </div>
          <div className="footer-actions">
            <button className="secondary-btn">Download Report</button>
            <button className="primary-btn">Schedule Meeting</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;