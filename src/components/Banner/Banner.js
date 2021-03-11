import React from 'react';
import globalFootballLeague from '../../photos/global-football-league.jpg';
import './Banner.css';

const Banner = (props) => {
    const logo = props.logo;
    const showLogo = props.showLogo;
    return (
        <div className="banner-part mb-3">
            <img className="banner-img" src={globalFootballLeague} alt="" />
            {showLogo === true ? <img className="centered center-image" src={logo} alt=""/> :  <h1 className="centered">Global Championship League</h1>}
        </div>
    );
};

export default Banner;