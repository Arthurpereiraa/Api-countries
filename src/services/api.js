import axios from "axios";

// Função para obter todos os países
export const getAllCountries = () => {
  return axios.get('https://restcountries.com/v3.1/all');
};
