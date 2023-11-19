// src/Home.js
import React from 'react';
import './Homescreen.css';
import { FaHome, FaUser } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import Group1 from '../../img/Group1.png'
import moptro from '../../img/moptro.png'

//import BottomNav from './ButtomNav';

const Homescreen = () => {
    const history = useHistory();

    const handleUserIconClick = () => {
        // Navigate to the Employerdata screen
        history.push('/employerdata');
      };
  return (
    <div className="home-container"> 
        <div className="home-img">
            <img src={ Group1} alt="Logo" className="logo" />
        </div>
        <div className="home-row1">
                <div className="home-img1">
                    <img src={ moptro} alt="Logo" className="logo" />
                </div>
                <div className="home-item">
                    <div className="home-no">
                        4
                    </div>        
                </div>
            </div>
        <div className="home-main">
            <div className="home-p">
                <div className="home-productivity">
                    <div className="home-p-n">
                        Employee productivity Dashboard
                    </div>
                </div> 
                <div className="h-p-rate">
                    <div className="h-p-rate-r">
                    productivity on Monday
                    </div>
                    <div className="h-p-rate-l">
                       4%
                    </div>
                </div>
                <div className="home-p-p">
                    <div className="home-p-p1"></div>
                </div>
                <div className="h-p-rate">
                    <div className="h-p-rate-r">
                    productivity on Tuesday
                    </div>
                    <div className="h-p-rate-l">
                       92%
                    </div>
                </div>
                <div className="home-p-p">
                    <div className="home-p-p2"></div>
                </div>
                <div className="h-p-rate">
                    <div className="h-p-rate-r">
                    productivity on Wednesday
                    </div>
                    <div className="h-p-rate-l">
                       122%
                    </div>
                </div>
                <div className="home-p-p">
                    <div className="home-p-p3"></div>
                </div>
                <div className="h-p-rate">
                    <div className="h-p-rate-r">
                    productivity on Thursday
                    </div>
                    <div className="h-p-rate-l">
                       93%
                    </div>
                </div>
                <div className="home-p-p">
                    <div className="home-p-p4"></div>
                </div>
                <div className="h-p-rate">
                    <div className="h-p-rate-r">
                    productivity on Friday
                    </div>
                    <div className="h-p-rate-l">
                       89%
                    </div>
                </div>
                <div className="home-p-p">
                    <div className="home-p-p5"></div>
                </div>
                <div className="h-p-rate">
                    <div className="h-p-rate-r">
                    productivity on Saturday
                    </div>
                    <div className="h-p-rate-l">
                       95%
                    </div>
                </div>
                <div className="home-p-p">
                    <div className="home-p-p6"></div>
                </div>
            </div>  
        </div>
        <div className="h-bottom">
            <div className="h-bottom1">
            <FaHome className="nav-icon" />
            <FaUser className="nav-icon" onClick={handleUserIconClick}/>


            </div>

        </div>

    </div>
    
    
    
  );
};

export default Homescreen;
