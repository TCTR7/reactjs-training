// services/api.ts
const BASE_API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async (): Promise<any> => {
    const response = await fetch(`${BASE_API_URL}/users`);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return response.json();
};

export const fetchUserDetail = async (id: number): Promise<any> => {
    return fetch(`${BASE_API_URL}/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch user detail');
        }
        return response.json();
      });
};
