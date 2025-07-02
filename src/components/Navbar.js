import React from 'react';
import './Navbar.css';

const Navbar = ({ activePage, setActivePage }) => {
  const navItems = [
    { id: 'Home', label: 'Home' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'credits', label: 'Credits' },
    { id: 'allocation', label: 'Allocation' },
    { id: 'lease', label: 'Lease Management' },
    { id: 'audit', label: 'Audit' },
    { id: 'news', label: 'News' },
    { id: 'forum', label: 'Corporate Forum' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button 
          className="navbar-brand"
          onClick={() => setActivePage('dashboard')}
          type="button"
        >
          CorpCredit
        </button>
        
        <ul className="nav">
          {navItems.map(item => (
            <li key={item.id} className="nav-item">
              <button 
                className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                onClick={() => setActivePage(item.id)}
                type="button"
                {...(activePage === item.id && { 'aria-current': 'page' })}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;