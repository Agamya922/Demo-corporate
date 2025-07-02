import React from 'react';
import './Table.css';

const Table = ({ title, headers, rows, data }) => {
  // Handle both data structures: direct props and data object
  const tableHeaders = headers || data?.headers || [];
  const tableRows = rows || data?.rows || [];
  
  // Safety check to prevent errors
  if (!tableHeaders.length || !tableRows.length) {
    return (
      <div className="table-container">
        <div className="table-header">
          <h3 className="table-title">{title || 'Data Table'}</h3>
        </div>
        <div className="no-data">No data available</div>
      </div>
    );
  }

  const renderCell = (value, key) => {
    if (typeof value === 'object' && value !== null && value.text) {
      // Status cell
      return <span className={`status ${value.type}`}>{value.text}</span>;
    }
    return value;
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <h3 className="table-title">{title || 'Data Table'}</h3>
      </div>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.entries(row).map(([key, value], cellIndex) => (
                <td key={cellIndex}>
                  {renderCell(value, key)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;