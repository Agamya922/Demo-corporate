import React from 'react';
import Card from './Card';
import Table from './Table';
import './Credits.css';

const Credits = ({ openModal }) => {
  const creditCards = [
    {
      title: 'Corporate Treasury',
      icon: '🏦',
      value: '2,450,000',
      change: 'Total Credits',
      changeType: 'positive',
      actions: [
        { label: 'Transfer Credits', type: 'btn-primary', onClick: () => openModal('transferModal') },
        { label: 'Generate Report', type: 'btn-secondary', onClick: () => {} }
      ]
    },
    {
      title: 'Monthly Inflow',
      icon: '📈',
      value: '340,000',
      change: '+22% increase',
      changeType: 'positive'
    },
    {
      title: 'Credit Utilization',
      icon: '⚡',
      value: '77%',
      change: 'Optimal range',
      changeType: '',
      progress: 77
    }
  ];

  const creditHistoryData = {
    headers: ['Date', 'Transaction Type', 'Department', 'Credits', 'Balance', 'Status'],
    rows: [
      {
        date: '2025-06-14',
        transactionType: 'Quarterly Allocation',
        department: 'Manufacturing',
        credits: '+450,000',
        balance: '2,450,000',
        status: { text: 'Active', type: 'active' }
      },
      {
        date: '2025-06-13',
        transactionType: 'Inter-department Transfer',
        department: 'Operations → R&D',
        credits: '-120,000',
        balance: '2,000,000',
        status: { text: 'Approved', type: 'approved' }
      },
      {
        date: '2025-06-12',
        transactionType: 'External Purchase',
        department: 'Procurement',
        credits: '-350,000',
        balance: '2,120,000',
        status: { text: 'Approved', type: 'approved' }
      }
    ]
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Corporate Credits</h1>
        <p className="page-subtitle">Manage your corporate credit portfolio and treasury operations.</p>
      </div>

      <div className="dashboard-grid">
        {creditCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <Table
        title="Credit History"
        headers={creditHistoryData.headers}
        rows={creditHistoryData.rows}
      />
    </div>
  );
};

export default Credits;