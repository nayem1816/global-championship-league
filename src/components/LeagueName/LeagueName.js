import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeagueName.css';

const LeagueName = (props) => {
    const { idLeague } = props.league;
    // console.log(idLeague);
    const [leaguesId, setLeaguesId] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeaguesId(data.leagues[0]))
    }, [])
    const { strLeague, strLogo, strSport} = leaguesId;
    // console.log(strLeague);
    return (
        <div className="col-md-3 league-card-style">
            <div className="">
                <img className="p-2" src={strLogo} alt="" />
                <h2 className="mt-2">{strLeague}</h2>
                <p>Sports type: {strSport}</p>
                <Link to={`/league/${idLeague}`}><button className="btn btn-dark mb-3">Explore <small><FontAwesomeIcon icon={faArrowRight} /></small></button></Link>
            </div>
        </div>
    );
};

export default LeagueName;