import React from 'react';
import './Flag.css';

const Flag = ({ country }) => {
  return <img className="country-flag" src={country.flags.png} alt={`Bandeira de ${country.name.common}`} />;
};

export default Flag;
