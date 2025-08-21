import React, { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function ProfileForm() {
  const [form, setForm] = useState({ age: '', family_members: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user_id = localStorage.getItem('user_id');
    if (!user_id) {
      alert('User not found. Please log in again.');
      return;
    }
    await API.post('profile/', { ...form, user: user_id });
    alert('Profile saved!');
    navigate('/business');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Age" type="number" onChange={(e) => setForm({...form, age: e.target.value})} />
      <input placeholder="Family Members" type="number" onChange={(e) => setForm({...form, family_members: e.target.value})} />
      <button type="submit">Save Profile</button>
    </form>
  );
}
