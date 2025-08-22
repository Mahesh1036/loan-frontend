import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    navigate('/');
  };

  return (
    <button onClick={handleLogout} style={{
      position: 'absolute',
      top: 16,
      right: 20,
      background: '#ef4444',
      color: '#fff',
      border: 'none',
      borderRadius: 4,
      padding: '0.25rem 0.8rem',
      fontWeight: 500,
      cursor: 'pointer',
      fontSize: '0.95rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      display: 'inline-block',
      width: 'auto',
      minWidth: 0,
      maxWidth: 'none'
    }}>
      Logout
    </button>
  );
}
