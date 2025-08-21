
import React from 'react';
// import ProfileForm from './ProfileForm';
// import BusinessForm from './BusinessForm';
import LoanApplication from './LoanApplication';

export default function Dashboard() {
  return (
    <div className="app-container">
      <div className="dashboard-container">
        <div className="dashboard-title">Dashboard</div>
  {/* Profile and Business forms moved to their own pages */}
        <LoanApplication />
      </div>
    </div>
  );
}
