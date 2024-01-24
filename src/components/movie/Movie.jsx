import React, { useEffect, useState } from 'react';
import Card from '../shared/Card.jsx'
import "./movie.scss";
import { API ,IMAGE_LINK} from "../../utils/varibles";

const Movie = () => {
  const [movie,setMovie] = useState([]);
  useEffect(() => {
      getByMovies()
  },[])
  const getByMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API}`
    );
    const data = await response.json()
    console.log(data.results)
    setMovie(data.results)
}
  return (
    <div className='movie'>
        <h1>Movies</h1>
        <div className='container'>
          {movie  &&
            movie?.map(m=>{
             return <Card datas={m}/>
            })
          }
            
       </div>
    </div>      
  )
}

export default Movie