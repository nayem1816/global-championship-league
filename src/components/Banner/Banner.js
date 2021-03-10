import React from 'react';
import globalFootballLeague from '../../photos/global-football-league.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-part mb-3">
            <img src={globalFootballLeague} alt="" />
            <h1 className="centered">Global Championship League</h1>
        </div>
    );
};

export default Banner;