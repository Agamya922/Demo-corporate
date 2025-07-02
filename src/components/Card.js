import React from 'react';
import './Card.css';

const Card = ({ 
  title, 
  icon, 
  value, 
  change, 
  changeType, 
  progress, 
  className = '', 
  actions 
}) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-header">
        <span className="card-title">{title}</span>
        <span className="card-icon">{icon}</span>
      </div>
      <div className="card-value">{value}</div>
      <div className={`card-change ${changeType}`}>{change}</div>
      
      {progress && (
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      )}
      
      {actions && (
        <div className="allocation-actions">
          {actions.map((action, index) => (
            <button
              key={index}
              className={`btn ${action.type}`}
              onClick={action.onClick}
            >
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;