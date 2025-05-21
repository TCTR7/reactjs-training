
const API_URL = import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com';

export async function fetchUser() {
    console.log(`Fetching users from API: ${API_URL}/users...`);
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    const data = await response.json();
    console.log(data);
    return data;
}