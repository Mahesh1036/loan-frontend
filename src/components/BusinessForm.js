import React, { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function BusinessForm() {
  const [form, setForm] = useState({
    business_name: '',
    location: '',
    income: '',
    business_age: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user_id = localStorage.getItem('user_id');
    if (!user_id) {
      alert('User not found. Please log in again.');
      return;
    }
    await API.post('business/', { ...form, user: user_id });
    alert('Business details saved!');
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Business Name" onChange={(e) => setForm({...form, business_name: e.target.value})} />
      <input placeholder="Location" onChange={(e) => setForm({...form, location: e.target.value})} />
      <input placeholder="Income" onChange={(e) => setForm({...form, income: e.target.value})} />
      <input placeholder="Business Age" onChange={(e) => setForm({...form, business_age: e.target.value})} />
      <button type="submit">Submit</button>
    </form>
  );
}
