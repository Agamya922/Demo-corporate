import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/Home';
import Dashboard from './components/Dashboard';
import Credits from './components/Credits';
import Allocation from './components/Allocation';
import Lease from './components/Lease';
import Audit from './components/Audit';
import News from './components/News';
import Forum from './components/Forum';
import Modal from './components/Modal';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [activePage, setActivePage] = useState('home'); // Changed from 'dashboard' to 'home'
  const [modals, setModals] = useState({
    transferModal: false,
    allocationModal: false,
    leaseModal: false,
    forumModal: false
  });

  const openModal = (modalId) => {
    setModals(prev => ({ ...prev, [modalId]: true }));
  };

  const closeModal = (modalId) => {
    setModals(prev => ({ ...prev, [modalId]: false }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (This is a demo - no actual processing occurs)');
    setModals({
      transferModal: false,
      allocationModal: false,
      leaseModal: false,
      forumModal: false
    });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={setActivePage} openModal={openModal} />;
      case 'dashboard':
        return <Dashboard />;
      case 'credits':
        return <Credits openModal={openModal} />;
      case 'allocation':
        return <Allocation openModal={openModal} />;
      case 'lease':
        return <Lease openModal={openModal} />;
      case 'audit':
        return <Audit />;
      case 'news':
        return <News />;
      case 'forum':
        return <Forum openModal={openModal} />;
      default:
        return <HomePage setActivePage={setActivePage} openModal={openModal} />; // Changed default from Dashboard to HomePage
    }
  };

  return (
    <>
      <div className="app-container">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <main className="main-content">{renderPage()}</main>

        {/* Transfer Credits Modal */}
        <Modal
          isOpen={modals.transferModal}
          onClose={() => closeModal('transferModal')}
          title="Transfer Credits"
          onSubmit={handleFormSubmit}
        >
          <div className="form-group">
            <label className="form-label">From Department</label>
            <select className="form-input" required>
              <option value="">Select department</option>
              <option value="treasury">Corporate Treasury</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="rd">R&D</option>
              <option value="operations">Operations</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">To Department</label>
            <select className="form-input" required>
              <option value="">Select department</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="rd">R&D</option>
              <option value="operations">Operations</option>
              <option value="external">External Partner</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Credit Amount</label>
            <input
              type="number"
              className="form-input"
              placeholder="Enter amount"
              min="1000"
              step="1000"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Purpose</label>
            <textarea
              className="form-input"
              rows="3"
              placeholder="Describe the transfer purpose..."
              required
            />
          </div>
        </Modal>

        {/* Allocation Modal */}
        <Modal
          isOpen={modals.allocationModal}
          onClose={() => closeModal('allocationModal')}
          title="Modify Department Allocation"
          onSubmit={handleFormSubmit}
        >
          <div className="form-group">
            <label className="form-label">Department</label>
            <select className="form-input" required>
              <option value="">Select department</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="rd">R&D</option>
              <option value="operations">Operations</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">New Allocation Amount</label>
            <input
              type="number"
              className="form-input"
              placeholder="Enter new allocation"
              min="50000"
              step="10000"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Effective Date</label>
            <input type="date" className="form-input" required />
          </div>
          <div className="form-group">
            <label className="form-label">Justification</label>
            <textarea
              className="form-input"
              rows="3"
              placeholder="Provide justification for allocation change..."
              required
            />
          </div>
        </Modal>

        {/* Lease Modal */}
        <Modal
          isOpen={modals.leaseModal}
          onClose={() => closeModal('leaseModal')}
          title="Create New Lease Agreement"
          onSubmit={handleFormSubmit}
        >
          <div className="form-group">
            <label className="form-label">Lessee Company</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter company name"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Credit Amount</label>
            <input
              type="number"
              className="form-input"
              placeholder="Enter credit amount"
              min="100000"
              step="10000"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Lease Duration (months)</label>
            <input
              type="number"
              className="form-input"
              placeholder="Enter duration"
              min="1"
              max="36"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Monthly Rate (%)</label>
            <input
              type="number"
              className="form-input"
              placeholder="Enter rate"
              min="0.1"
              max="10"
              step="0.1"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Start Date</label>
            <input type="date" className="form-input" required />
          </div>
          <div className="form-group">
            <label className="form-label">Special Terms</label>
            <textarea
              className="form-input"
              rows="3"
              placeholder="Any special terms or conditions..."
            />
          </div>
        </Modal>

        {/* Forum Modal */}
        <Modal
          isOpen={modals.forumModal}
          onClose={() => closeModal('forumModal')}
          title="Start New Discussion"
          onSubmit={handleFormSubmit}
        >
          <div className="form-group">
            <label className="form-label">Discussion Title</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter discussion title"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Category</label>
            <select className="form-input" required>
              <option value="">Select category</option>
              <option value="budget">Budget Management</option>
              <option value="legal">Legal & Compliance</option>
              <option value="audit">Audit & Compliance</option>
              <option value="practices">Best Practices</option>
              <option value="support">Technical Support</option>
              <option value="general">General Discussion</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              className="form-input"
              rows="6"
              placeholder="Share your thoughts, questions, or insights..."
              required
            />
          </div>
        </Modal>
      </div>

      {/* Footer at the bottom of the page */}
      <Footer />
    </>
  );
};

export default App;