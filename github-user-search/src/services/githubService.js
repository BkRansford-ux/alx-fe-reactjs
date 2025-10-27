import axios from "axios";

// Advanced search with multiple filters
export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  // Search API
  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=5`
  );

  const users = response.data.items;

  // Fetch extra details for each user (location, repos, etc.)
  const detailedUsers = await Promise.all(
    users.map(async (user) => {
      const details = await fetchUserDetails(user.login);
      return { ...user, ...details };
    })
  );

  return detailedUsers;
};

// Fetch extra details for one user
export const fetchUserDetails = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};
