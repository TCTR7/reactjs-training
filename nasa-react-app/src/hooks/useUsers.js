
import { useState, useEffect } from 'react';
import { fetchUser } from '../services/api';

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUser()
        .then(data => setUsers(data))
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }, []);
    return { users, loading, error };
}
