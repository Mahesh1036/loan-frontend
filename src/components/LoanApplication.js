
import React, { useEffect, useState } from 'react';
import API from '../services/api';

export default function LoanApplication() {
  const [loans, setLoans] = useState([]);

  const applyLoan = async () => {
    const user_id = localStorage.getItem('user_id');
    if (!user_id) {
      alert('User not found. Please log in again.');
      return;
    }
    await API.post('loans/', { user: user_id });
    fetchLoans();
  };

  const fetchLoans = async () => {
    const res = await API.get('loans/');
    setLoans(res.data);
  };

  useEffect(() => {
    fetchLoans();
  }, []);

  // Helper to get badge color based on status
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'loan-badge approved';
      case 'pending':
        return 'loan-badge pending';
      case 'rejected':
        return 'loan-badge rejected';
      default:
        return 'loan-badge';
    }
  };

  // Helper to format date (YYYY-MM-DD)
  const formatDate = (dateString) => {
    if (!dateString) return '';
    return dateString.split('T')[0];
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <button onClick={applyLoan}>Apply for Loan</button>
      <ul style={{ marginTop: '1.5rem', listStyle: 'none', padding: 0 }}>
        {loans.map((loan) => (
          <li key={loan.id} style={{
            marginBottom: '1rem',
            background: '#f9fafb',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <span className={getStatusClass(loan.status)}>{loan.status}</span>
            <span style={{ color: '#555', fontSize: '1rem' }}>Applied on: <b>{formatDate(loan.created_at)}</b></span>
          </li>
        ))}
      </ul>
      <style>{`
        .loan-badge {
          padding: 0.4em 1.2em;
          border-radius: 20px;
          font-weight: 600;
          font-size: 1rem;
          text-transform: capitalize;
          color: #fff;
          background: #888;
          margin-right: 1.5rem;
        }
        .loan-badge.approved { background: #22c55e; }
        .loan-badge.pending { background: #f59e42; }
        .loan-badge.rejected { background: #ef4444; }
      `}</style>
    </div>
  );
}
