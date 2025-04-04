import React from 'react';
import './Currency.css';

const Currency = ({ country }) => {
  const currency = country.currencies ? country.currencies[Object.keys(country.currencies)[0]].name : 'N/A';
  return (
    <p><strong>Moeda:</strong> {currency}</p>
  );
};

export default Currency;
