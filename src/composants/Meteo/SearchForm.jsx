import React, { useState } from 'react';

const SearchForm = ({ submitForm }) => {
  const [cityName, setCityName] = useState('');

  return (
    <div className="d-flex">
      <input
        type="text"
        placeholder="City"
        value={cityName}
        onChange={(input) => setCityName(input.target.value)}
      />
      <input
        type="submit"
        value="Rechercher"
        onClick={() => submitForm(cityName)}
        className="ml-2"
      />
    </div>
  );
};

export default SearchForm;
