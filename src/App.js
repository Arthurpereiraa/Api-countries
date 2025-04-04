import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryCard from './components/CountryCard';  // Importando o CountryCard
import Loader from './components/Loader';  // Importando o Loader
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função para buscar os países na API RestCountries
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar os países:', error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="app-container">
      <h1>Lista de Países</h1>
      <div className="country-list">
        {countries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default App;
