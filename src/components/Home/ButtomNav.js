// src/components/BottomNav.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBuilding } from '@fortawesome/free-solid-svg-icons';

const BottomNav = () => {
  return (
    <div className="bottom-nav">
        <label>hgsdhgvcmvn</label>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} />
        Home
      </Link>
      <Link to="/employer">
        <FontAwesomeIcon icon={faBuilding} />
        Employer
      </Link>
    </div>
  );
};

export default BottomNav;
