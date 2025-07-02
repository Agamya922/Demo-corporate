import React from 'react';
import Card from './Card';
import Table from './Table';

const Lease = ({ openModal }) => {
  const leaseCards = [
    {
      title: 'Active Leases',
      icon: '🏢',
      value: '23',
      change: '$4.2M total value',
      changeType: 'positive',
      className: 'lease-card',
      actions: [
        { label: 'New Lease', type: 'btn-primary', onClick: () => openModal('leaseModal') },
        { label: 'View All', type: 'btn-secondary', onClick: () => {} }
      ]
    },
    {
      title: 'Monthly Lease Income',
      icon: '💰',
      value: '$185,000',
      change: '+8% from last month',
      changeType: 'positive',
      className: 'lease-card'
    },
    {
      title: 'Expiring This Month',
      icon: '⏰',
      value: '3',
      change: 'Renewal required',
      changeType: 'warning',
      actions: [
        { label: 'Renew All', type: 'btn-primary', onClick: () => {} }
      ]
    }
  ];

  const leaseData = {
    headers: ['Lease ID', 'Lessee', 'Credits', 'Monthly Rate', 'Start Date', 'End Date', 'Status', 'Actions'],
    rows: [
      {
        leaseId: '#LS-2025-001',
        lessee: 'TechCorp Industries',
        credits: '450,000',
        monthlyRate: '$18,000',
        startDate: '2025-01-15',
        endDate: '2025-12-15',
        status: { text: 'Active', type: 'active' },
        actions: <button className="btn btn-secondary">Manage</button>
      },
      {
        leaseId: '#LS-2025-002',
        lessee: 'GreenEnergy Ltd',
        credits: '320,000',
        monthlyRate: '$12,800',
        startDate: '2025-02-01',
        endDate: '2025-06-30',
        status: { text: 'Expiring', type: 'expired' },
        actions: <button className="btn btn-primary">Renew</button>
      },
      {
        leaseId: '#LS-2025-003',
        lessee: 'Manufacturing Co',
        credits: '680,000',
        monthlyRate: '$27,200',
        startDate: '2025-03-10',
        endDate: '2026-03-10',
        status: { text: 'Active', type: 'active' },
        actions: <button className="btn btn-secondary">Manage</button>
      }
    ]
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Lease Management</h1>
        <p className="page-subtitle">Manage credit leases, agreements, and rental arrangements.</p>
      </div>

      <div className="dashboard-grid">
        {leaseCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <Table
        title="Active Lease Agreements"
        headers={leaseData.headers}
        rows={leaseData.rows}
      />
    </div>
  );
};

export default Lease;