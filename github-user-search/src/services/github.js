// src/services/github.js
import axios from 'axios';

const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY || '';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com',
  headers: apiKey ? { Authorization: `token ${apiKey}` } : {}
});

export async function searchUsers(query) {
  if (!query || !query.trim()) return [];
  const q = encodeURIComponent(query + ' in:login');
  const res = await axiosInstance.get(`/search/users?q=${q}&per_page=30`);
  return res.data.items || [];
}

export async function getUserDetails(username) {
  const res = await axiosInstance.get(`/users/${encodeURIComponent(username)}`);
  return res.data;
}
