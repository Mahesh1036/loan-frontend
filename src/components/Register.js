
import React, { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('register/', form);
    alert('Registration successful!');
    navigate('/login');
  };

  return (
    <div className="app-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-title">Register</div>
        <input placeholder="Username" onChange={(e) => setForm({...form, username: e.target.value})} />
        <input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})} />
        <input placeholder="Password" type="password" onChange={(e) => setForm({...form, password: e.target.value})} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
