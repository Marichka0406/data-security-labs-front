import axios from 'axios'; // Ensure correct import

const API_URL = 'http://localhost:3001/md5';

// Service for hashing a string
const hashString = async (input) => {
  try {
    const response = await axios.get(`${API_URL}/hash`, { params: { input } });
    return response.data; // Returns the hashing result
  } catch (error) {
    console.error('Error hashing string:', error);
    throw error;
  }
};

// Service for hashing a file
const hashFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file); // Add the file to formData

  try {
    const response = await axios.post(`${API_URL}/file-hash`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data; // Returns the result of the file hashing
  } catch (error) {
    console.error('Error hashing file:', error);
    throw error;
  }
};

// Service for verifying file integrity
const verifyFile = async (file, expectedHash) => {
  const formData = new FormData();
  formData.append('file', file); // Add the file to formData
  formData.append('expectedHash', expectedHash); // Add the expected hash

  try {
    const response = await axios.post(`${API_URL}/verify-file`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data; // Returns the verification result (true or false)
  } catch (error) {
    console.error('Error verifying file:', error);
    throw error;
  }
};

export { hashString, hashFile, verifyFile }; // Ensure you're exporting the functions
