import axios from "axios";

const BASE_URL = "https://api.github.com";

// Advanced search function
export const fetchAdvancedUsers = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: query.trim(), per_page: 10 },
    });

    // For each user, fetch additional details like location
    const userDetails = await Promise.all(
      response.data.items.map(async (user) => {
        const res = await axios.get(`${BASE_URL}/users/${user.login}`);
        return res.data;
      })
    );

    return userDetails;
  } catch (err) {
    throw err;
  }
};
