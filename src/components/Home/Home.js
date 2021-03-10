import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import LeagueName from '../LeagueName/LeagueName';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.leagues))
    }, [])
    // console.log(leagues);
    const newLeagues = leagues.slice(0, 20);
    // console.log(newLeagues);

    return (
        <div className="full-body-part">
            <Banner></Banner>
            <div className="row d-flex justify-content-center p-3">
                {
                    newLeagues.map(league => <LeagueName league={league} key={league.idLeague}></LeagueName>)
                }
            </div>
        </div>
    );
};

export default Home;