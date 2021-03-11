import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faRssSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <a target="_blank" href="https://www.rss.org/"><FontAwesomeIcon icon={faRssSquare} /></a>
            <a target="_blank" href='https://www.facebook.com'><FontAwesomeIcon icon={faFacebookSquare} /></a>
            <a target="_blank" href="https://twitter.com/home"><FontAwesomeIcon icon={faTwitterSquare} /></a>
            <a target="_blank" href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutubeSquare} /></a>
        </div>
    );
};

export default Footer;