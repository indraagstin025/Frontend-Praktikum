import axios from "axios";

const API_URL = "https://backend-praktikum-production.up.railway.app";

/**
 * Mengirim request login ke backend.
 * @param {string} username
 * @param {string} password
 * @returns {Promise<any>}
 */
export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

/**
 * Mengirim request registrasi ke backend.
 * @param {string} username
 * @param {string} password
 * @param {string} role
 * @returns {Promise<any>}
 */
export const register = async (username, password, role) => {

  const response = await axios.post(`${API_URL}/register`, { username, password, role });
  return response.data;
};