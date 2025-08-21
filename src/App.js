import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProfileForm from './components/ProfileForm';
import BusinessForm from './components/BusinessForm';
import PrivateRoute from './PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{textAlign: 'center', margin: '2rem 0 1.5rem 0', fontWeight: 700, fontSize: '2rem', color: '#2563eb', letterSpacing: '1px'}}>
        Business Loan Application
      </div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfileForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/business"
          element={
            <PrivateRoute>
              <BusinessForm />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
