import axios from 'axios';

const API_KEY = 'f94c6dcab3fc404697f3be30dbff3eb8';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const weatherApi = {
  getCurrentWeather: async (city) => {
    try {
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
          lang: 'pt_br'
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getForecast: async (city) => {
    try {
      const response = await axios.get(`${BASE_URL}/forecast`, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
          lang: 'pt_br'
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}; 