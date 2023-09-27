import axios from 'axios';

const API_URL = 'https://easyshare-server.onrender.com/';

export const uploadFile = async (data) => {
    try {
       const response = await axios.post(`${API_URL}/upload`, data);
       return response.data;
    } catch (error) {
        console.error('Error while API call', error.message);
    }
};
