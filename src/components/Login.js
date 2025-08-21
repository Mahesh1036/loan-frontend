
// import React, { useState } from 'react';
// import API from '../services/api';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//   const [form, setForm] = useState({ username: '', password: '' });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError('');
//     try {
//       const res = await API.post('token/', form);
//       localStorage.setItem('token', res.data.access);
//       const base64Url = res.data.access.split('.')[1];
//       const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//       const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
//         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//       }).join(''));
//       const payload = JSON.parse(jsonPayload);
//       if (payload.user_id) {
//         localStorage.setItem('user_id', payload.user_id);
//       }
//   alert('Login successful!');
//   navigate('/profile');
//     } catch (err) {
//       if (err.response && err.response.data && err.response.data.detail === 'No active account found with the given credentials') {
//         setError('User not found.');
//       } else {
//         setError('Login failed. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="app-container">
//       <form className="form-container" onSubmit={handleLogin}>
//         <div className="form-title">Login</div>
//         {error && <div className="error-message">{error}</div>}
//         <input placeholder="Username" onChange={(e) => setForm({...form, username: e.target.value})} />
//         <input placeholder="Password" type="password" onChange={(e) => setForm({...form, password: e.target.value})} />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

import React, { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await API.post('token/', form);
      localStorage.setItem('token', res.data.access);
      const base64Url = res.data.access.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      const payload = JSON.parse(jsonPayload);
      if (payload.user_id) {
        localStorage.setItem('user_id', payload.user_id);
      }
      // Check profile and business existence
      const profileRes = await API.get('profile/exists/');
      if (!profileRes.data.exists) {
        navigate('/profile');
        return;
      }
      const businessRes = await API.get('business/exists/');
      if (!businessRes.data.exists) {
        navigate('/business');
        return;
      }
      navigate('/dashboard');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.detail === 'No active account found with the given credentials') {
        setError('User not found.');
      } else {
        setError('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className="app-container">
      <form className="form-container" onSubmit={handleLogin}>
        <div className="form-title">Login</div>
        {error && <div className="error-message">{error}</div>}
        <input placeholder="Username" onChange={(e) => setForm({...form, username: e.target.value})} />
        <input placeholder="Password" type="password" onChange={(e) => setForm({...form, password: e.target.value})} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
