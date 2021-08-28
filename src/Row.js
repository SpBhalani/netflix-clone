import React, { useEffect, useState } from 'react'
import instancea from './axios'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './row.css'
/**
* @author
* @function Row
**/
const base_url = "https://image.tmdb.org/t/p/w500";
const Row = ({title,url ,isMain}) => {
    const[movies , setMovies] =useState([]);
    const [trailer , setTrailer] = useState('');
    const opt = {
        width: "100%",
        height : "250"
    } 
    useEffect( ()=>{
        async function fetchData(){
            const responce = await instancea.get(url);
            // console.log(responce);
            setMovies(responce.data.results);
        }
        fetchData();
    },[url])
    const handelClick = async (movie) => {
        if (trailer)
        {
            setTrailer('');

        }
        else
        {   try{

            const url1 = await movieTrailer(movie?.name || '');
            const serchParams = new URLSearchParams( new URL(url1).search ).get('v');
            if(serchParams) setTrailer(serchParams);
        }
        catch(e){
            console.log(e);
        }
        }
    }

  return(
    <div className="row_container">
        <h2>{title}</h2>
        <div className="row_items">
            {movies.map((mo) => {
                // console.log(mo   );
                
                return(
                        <img 
                        onClick={() => handelClick(mo)}
                        key={mo.id}
                        className={isMain ? "row_item row_main" : "row_item"} 
                        src = {`${base_url}${mo.poster_path}`}
                        alt={mo.original_title}/>

                )
            })}
        </div>
        {trailer && <YouTube videoId={trailer} opts={opt}/>}
    </div>
   )

 }

export default Row