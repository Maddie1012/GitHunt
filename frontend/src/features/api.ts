import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

// получение репозиториев пользователя
export const fetchUserRepos = async (username: string, page: number = 1, perPage: number = 20) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`, {
      params: {
        page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch repositories: ${error}`);
  }
};

// получение информации о пользователе
export const fetchUserInfo = async (username: string) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error(`User not found: ${error}`);
  }
};