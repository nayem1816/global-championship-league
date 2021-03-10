import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import {faFlag, faFutbol, faPodcast, faRssSquare, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import femalePic from '../../photos/female.png';
import malePic from '../../photos/male.png';
import globalFootballLeague from '../../photos/global-football-league.jpg';
import './LeagueDetails.css';

const LeagueDetails = () => {
    const { id } = useParams();
    const [league, setLeague] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [])
    const { strBanner, strLeague, strCountry, strGender, strSport, intFormedYear} = league;
    return (
        <div className="league-detail-part">
            <div className="league-banner">
                {strBanner === null ? <img src={globalFootballLeague} alt="" /> : <img src={strBanner} alt="" />}
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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis neque veritatis est vel saepe aut, nostrum nulla aliquam id reprehenderit quod nisi libero beatae iste laboriosam numquam minus aliquid nobis dolorum obcaecati? Inventore qui ex, sit facere beatae explicabo, delectus consequuntur omnis natus temporibus dolores iusto! Vero labore assumenda excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in laboriosam ipsam velit voluptatem quam est beatae ipsum eos incidunt?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis neque veritatis est vel saepe aut, nostrum nulla aliquam id reprehenderit quod nisi libero beatae iste laboriosam numquam minus aliquid nobis dolorum obcaecati? Inventore qui ex, sit facere beatae explicabo, delectus consequuntur omnis natus temporibus dolores iusto! Vero labore assumenda excepturi.</p>
                </div>
            </div>
            <div className="text-center pb-5 icon-style">
                <a target="_blank" href="https://www.rss.org/"><FontAwesomeIcon icon={faRssSquare} /></a>
                <a target="_blank" href='https://www.facebook.com'><FontAwesomeIcon icon={faFacebookSquare} /></a>
                <a target="_blank" href="https://twitter.com/home"><FontAwesomeIcon icon={faTwitterSquare} /></a>
                <a target="_blank" href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutubeSquare} /></a>
            </div>
        </div>
    );
};

export default LeagueDetails;