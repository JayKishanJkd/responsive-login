import React, { useEffect, useState } from 'react';
import './Employerdata.css';
import { FaHome, FaUser, FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import Group1 from '../../img/Group1.png';
import moptro from '../../img/moptro.png';
import axios from 'axios';

const Employerdata = () => {
  const history = useHistory();
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleHomeIconClick = () => {
    history.push('/homescreen');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://aggressive-boa-buckle.cyclic.app/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Filter employees based on the search term
  const filteredEmployees = employees.filter((employee) =>
    employee.NAME.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="employer-container">
      <div className="employer-img">
        <img src={Group1} alt="Logo" className="logo" />
      </div>
      <div className="employer-row1">
        <div className="employer-img1">
          <img src={moptro} alt="Logo" className="logo" />
        </div>
        <div className="employer-item">
          <div className="home-no">{filteredEmployees.length}</div>
        </div>
      </div>
      <div className="emp-search">
        <div className="emp-name-search">
          <input
            type="text"
            placeholder="Search With Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="search-icon" />
        </div>
      </div>
      <div className="employer-data">
        {filteredEmployees.map((employee, index) => (
          <div
            className={`emp-main1 ${
              index % 2 === 0 ? 'align-left' : 'align-right'
            }`}
            key={employee["EMP ID"]}
          >
            <div className="emp-main">
              <div className="emp-lable">
                <p> ID </p>
                <p> Name </p>
                <p> DOB </p>
                <p> Rol </p>
              </div>
              <div className="emp-dot">
                <p> : </p>
                <p> : </p>
                <p> : </p>
                <p> : </p>
              </div>
              <div className="emp-data">
                <p> {employee["EMP ID"]} </p>
                <p> {employee.NAME}</p>
                <p className="dob-t-color">
                  {' '}
                  {new Date(employee.DOB).toLocaleDateString()}{' '}
                </p>
                <p className="dob-t-role"> {employee.ROLE}</p>
              </div>
              <div className="emp-id-squar">{employee["EMP ID"]}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-bottom">
        <div className="h-bottom1">
          <FaHome className="nav-icon" onClick={handleHomeIconClick} />
          <FaUser className="nav-icon" />
        </div>
      </div>
    </div>
  );
};

export default Employerdata;
