import React from 'react';
import Card from './Card';
import Table from './Table';

const Allocation = ({ openModal }) => {
  const allocationCards = [
    {
      title: 'Manufacturing Allocation',
      icon: '🏭',
      value: '890,000',
      change: '36% of total budget',
      changeType: 'positive',
      progress: 72,
      className: 'allocation-card',
      actions: [
        { label: 'Modify Allocation', type: 'btn-primary', onClick: () => openModal('allocationModal') }
      ]
    },
    {
      title: 'R&D Allocation',
      icon: '🔬',
      value: '620,000',
      change: '25% of total budget',
      changeType: 'positive',
      progress: 45,
      className: 'allocation-card',
      actions: [
        { label: 'Modify Allocation', type: 'btn-primary', onClick: () => openModal('allocationModal') }
      ]
    },
    {
      title: 'Operations Allocation',
      icon: '⚙️',
      value: '380,000',
      change: '16% of total budget',
      changeType: 'positive',
      progress: 63,
      className: 'allocation-card',
      actions: [
        { label: 'Modify Allocation', type: 'btn-primary', onClick: () => openModal('allocationModal') }
      ]
    }
  ];

  const allocationData = {
    headers: ['Department', 'Allocated Credits', 'Used Credits', 'Remaining', 'Utilization %', 'Actions'],
    rows: [
      {
        department: 'Manufacturing',
        allocatedCredits: '890,000',
        usedCredits: '641,000',
        remaining: '249,000',
        utilization: '72%',
        actions: <button className="btn btn-secondary">Manage</button>
      },
      {
        department: 'Research & Development',
        allocatedCredits: '620,000',
        usedCredits: '279,000',
        remaining: '341,000',
        utilization: '45%',
        actions: <button className="btn btn-secondary">Manage</button>
      },
      {
        department: 'Operations',
        allocatedCredits: '380,000',
        usedCredits: '239,000',
        remaining: '141,000',
        utilization: '63%',
        actions: <button className="btn btn-secondary">Manage</button>
      }
    ]
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Credit Allocation</h1>
        <p className="page-subtitle">Manage department-wise credit allocations and budget distributions.</p>
      </div>

      <div className="dashboard-grid">
        {allocationCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <Table
        title="Department Allocation Summary"
        headers={allocationData.headers}
        rows={allocationData.rows}
      />
    </div>
  );
};

export default Allocation;