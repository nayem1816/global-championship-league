import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faRssSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = (props) => {
    const {strFacebook, srtTwitter, strYoutube, strRSS} = props.league;
    return (
        <div>
            <a target="_blank" href={`https://${strFacebook}`}><FontAwesomeIcon icon={faFacebookSquare} /></a>
            <a target="_blank" href={`https://${srtTwitter}`}><FontAwesomeIcon icon={faTwitterSquare} /></a>
            <a target="_blank" href={`https://${strYoutube}`}><FontAwesomeIcon icon={faYoutubeSquare} /></a>
            <a target="_blank" href={`https://${strRSS}`}><FontAwesomeIcon icon={faRssSquare} /></a>
        </div>
    );
};

export default Footer;