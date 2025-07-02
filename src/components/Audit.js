import React from 'react';
import Card from './Card';
import Table from './Table';
import './Audit.css';
const Audit = () => {
  const auditCards = [
    {
      title: 'Compliance Score',
      icon: '📊',
      value: '94.8%',
      change: 'Excellent compliance',
      changeType: 'positive',
      progress: 94.8,
      className: 'audit-card'
    },
    {
      title: 'Audit Alerts',
      icon: '⚠️',
      value: '2',
      change: 'Requires review',
      changeType: 'warning',
      className: 'audit-card',
      actions: [
        { label: 'Review Alerts', type: 'btn-primary', onClick: () => {} }
      ]
    },
    {
      title: 'Last Audit',
      icon: '📅',
      value: '15 days',
      change: 'Next due: 30 days',
      changeType: '',
      className: 'audit-card'
    }
  ];

  const auditData = {
    headers: ['Date', 'Audit Type', 'Department', 'Auditor', 'Finding', 'Severity', 'Status'],
    rows: [
      {
        date: '2025-06-10',
        auditType: 'Credit Compliance',
        department: 'Manufacturing',
        auditor: 'Internal Audit',
        finding: 'Documentation Gap',
        severity: { text: 'Medium', type: 'pending' },
        status: { text: 'In Progress', type: 'pending' }
      },
      {
        date: '2025-06-08',
        auditType: 'Lease Verification',
        department: 'Operations',
        auditor: 'External Audit',
        finding: 'All Clear',
        severity: { text: 'Low', type: 'active' },
        status: { text: 'Closed', type: 'approved' }
      },
      {
        date: '2025-06-05',
        auditType: 'Budget Allocation',
        department: 'R&D',
        auditor: 'Internal Audit',
        finding: 'Overspend Alert',
        severity: { text: 'High', type: 'expired' },
        status: { text: 'Resolved', type: 'approved' }
      }
    ]
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Corporate Audit</h1>
        <p className="page-subtitle">Compliance monitoring, audit trails, and regulatory reports.</p>
      </div>

      <div className="dashboard-grid">
        {auditCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <Table
        title="Recent Audit Activities"
        headers={auditData.headers}
        rows={auditData.rows}
      />
    </div>
  );
};

export default Audit;