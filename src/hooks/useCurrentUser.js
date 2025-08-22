import { useEffect, useState } from 'react';
import API from '../services/api';

export default function useCurrentUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await API.get('user/me/');
        setUser(res.data);
      } catch {
        setUser(null);
      }
    }
    fetchUser();
  }, []);

  return user;
}
