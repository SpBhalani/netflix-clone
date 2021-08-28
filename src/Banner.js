import React, { useEffect, useState } from 'react'
import './ban.css'
import axios from './axios'
const API_KEY = "9ee7d4025353ca17d143cc05bf1b0eb7";
const base_url = "https://image.tmdb.org/t/p/w500";


const fetchOriginals = `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`;
/**
* @author
* @function Banner
**/

const Banner = (props) => {
    const [movie, setMovie] = useState({});
    useEffect(() => {
        async function getData() {
            const res = await axios.get(fetchOriginals)
            const data = res.data.results;
            console.log(data);
            const ran = Math.floor(Math.random() * (data.length))
            setMovie(res.data.results[ran])
        }
        getData();
    }, [])

    function truncate(str , n){
        return str?.length > n ? str.substr(0,n - 1) + "..." : str;
    }

    return (
        <>
        <header className="ban_container"
            style={{
                backgroundImage: `url(${base_url}${movie?.backdrop_path || movie.poster_path})`,
                backgroundPosition: "center center"

            }}>
            <div className="banner">

                <h1 className="title">
                    {movie.name || movie.title}
                </h1>
                <div className="buttons">
                    <button className="ban_button">Play</button>
                    <button className="ban_button">My List</button>
                </div>
                <div className="overview">
                    {truncate(movie.overview,200)}
                </div>
            </div>
        </header>
            <div className="blur">

            </div>
        </>
        
    )

}

export default Banner