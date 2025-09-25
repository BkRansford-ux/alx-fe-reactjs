import axios from "axios";

// Advanced search for users
export const fetchUsers = async ({ username, location, minRepos }) => {
  try {
    // Build query string for search API
    let query = "";

    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
    );

    return response.data.items; // GitHub Search API returns results in .items
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
