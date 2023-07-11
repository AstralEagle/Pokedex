import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className={'d-flex justify-center align-center flex-col'}>
      <h1>Page Introuvable</h1>
      <Link
        to="/pokemon/"
        style={{ backgroundColor: '#7a7a7a', padding: 5, borderRadius: 5 }}
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error;
