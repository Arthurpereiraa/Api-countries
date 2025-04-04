import React from 'react';
import Flag from './Flag';
import Currency from './Currency';
import Language from './Language';
import './CountryCard.css';

const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <Flag country={country} />
      <div className="country-info">
        <h2>{country.name.common}</h2>
        <p><strong>Capital:</strong> {country.capital}</p>
        <Currency country={country} />
        <Language country={country} />
      </div>
    </div>
  );
};

export default CountryCard;
