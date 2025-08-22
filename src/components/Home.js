import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '3rem' }}>
      <button
        style={{
          width: 180,
          padding: '0.8rem 0',
          margin: '0.5rem',
          fontSize: '1.1rem',
          fontWeight: 600,
          borderRadius: 6,
          border: 'none',
          background: '#2563eb',
          color: '#fff',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/register')}
      >
        Register
      </button>
      <button
        style={{
          width: 180,
          padding: '0.8rem 0',
          margin: '0.5rem',
          fontSize: '1.1rem',
          fontWeight: 600,
          borderRadius: 6,
          border: 'none',
          background: '#4f8cff',
          color: '#fff',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/login')}
      >
        Login
      </button>
    </div>
  );
}
