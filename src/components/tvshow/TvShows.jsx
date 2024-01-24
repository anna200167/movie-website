import React, { useEffect, useState } from 'react'
import { API ,IMAGE_LINK} from "../../utils/varibles";

import "./tvshow.scss";
import TvCard from '../shared/TvCard.jsx';

const TvShows = () =>{
  const [movie,setMovie] = useState([]);
  useEffect(() => {
      getByMovies()
  },[])
  const getByMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${API}`
    );
    const data = await response.json()
    console.log(data.results)
    setMovie(data.results)
}
  return (
    <div className='movie'>
        <h1>TV Shows</h1>
        <div className='container'>
          {movie  &&
            movie?.map(m=>{
             return <TvCard datas={m}/>
            })
          }
            
       </div>
    </div>      
  )
}

export default TvShows