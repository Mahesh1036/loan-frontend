
import React from 'react';
// import ProfileForm from './ProfileForm';
// import BusinessForm from './BusinessForm';
import LoanApplication from './LoanApplication';
import useCurrentUser from '../hooks/useCurrentUser';

export default function Dashboard() {
  const user = useCurrentUser();
  return (
    <div className="app-container">
      <div className="dashboard-container">
        <div className="dashboard-title">Dashboard</div>
        {user && <div style={{textAlign: 'center', marginBottom: 12, fontWeight: 600}}>Welcome, {user.username}!</div>}
        <LoanApplication />
      </div>
    </div>
  );
}
