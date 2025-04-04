import React from 'react';
import './Language.css';

const Language = ({ country }) => {
  const languages = country.languages ? Object.values(country.languages).join(', ') : 'N/A';
  return (
    <p><strong>Idioma(s):</strong> {languages}</p>
  );
};

export default Language;
