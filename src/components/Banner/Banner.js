import React from 'react';
import globalFootballLeague from '../../photos/global-football-league.jpg';
import './Banner.css';

const Banner = (props) => {
    const logo = props.logo;
    const banner = props.banner;
    const showLogoBanner = props.showLogoBanner;
    return (
        <div className="banner-part mb-3">
            {
                showLogoBanner === true && banner !== null ? <img className="banner-img banner-opacity" src={banner} alt="" /> : <img className="banner-img" src={globalFootballLeague} alt="" />
            }
            {
                showLogoBanner === true ? <img className="centered center-image" src={logo} alt="" /> : <h1 className="centered">Global Championship League</h1>
            }
        </div>
    );
};

export default Banner;