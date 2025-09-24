// src/services/githubService.js

const BASE_URL = "https://api.github.com/search/users";

/**
 * Fetch GitHub user data with optional filters
 * @param {string} username - GitHub username
 * @param {string} location - Location filter
 * @param {string|number} repos - Minimum repos filter
 */
export async function fetchUserData(username, location, repos) {
  let query = "";

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (repos) query += ` repos:>=${repos}`;

  // If no query provided, fallback to something to avoid errors
  if (!query) query = "type:user";

  const url = `${BASE_URL}?q=${encodeURIComponent(query)}&per_page=12`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("GitHub API request failed");
  }

  return response.json();
}
