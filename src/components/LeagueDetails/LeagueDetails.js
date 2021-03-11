import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import {faFlag, faFutbol, faPodcast, faRssSquare, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import femalePic from '../../photos/female.png';
import malePic from '../../photos/male.png';
import globalFootballLeague from '../../photos/global-football-league.jpg';
import './LeagueDetails.css';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const LeagueDetails = () => {
    const { id } = useParams();
    const [league, setLeague] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [])
    // console.log(league);
    const { strBanner, strLogo, strLeague, strCountry, strGender, strSport, intFormedYear, strDescriptionEN, strDescriptionFR} = league;
    return (
        <div className="league-detail-part">
            <div className="league-banner">
                <Banner logo = {strLogo} showLogo={true}></Banner>
                {/* {strBanner === null ? <img src={globalFootballLeague} alt="" /> : <img src={strBanner} alt="" />} */}
            </div>
            <div className="total-details-part container">
                <div className="row details-banner m-5 p-3">
                    <div className="col-md-6 league-detail-text d-flex align-items-center">
                        <div className="">
                            <h2 className="mb-4">{strLeague}</h2>
                            <h6><FontAwesomeIcon icon={faPodcast} /> Founded: {intFormedYear}</h6>
                            <h6><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h6>
                            <h6><FontAwesomeIcon icon={faFutbol} /> Sport type: {strSport}</h6>
                            <h6><FontAwesomeIcon icon={faVenusMars} /> Gender: {strGender}</h6>
                        </div>
                    </div>
                    <div className="col-md-6 image-part">
                        {strGender ==='Female' ? <img src={femalePic} alt="" /> : <img src={malePic} alt="" />}
                    </div>
                </div>
                <div className="other-text-part">
                    <p>{strDescriptionEN}</p>
                    <p>{strDescriptionFR}</p>
                </div>
            </div>
            <div className="text-center pb-5 icon-style">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default LeagueDetails;