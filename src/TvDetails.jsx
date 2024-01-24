import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaPlus } from "react-icons/fa";
import "./details.scss"
import {useDispatch} from "react-redux"
import { addTv } from './redux/slices/wishlist';
const TvDetails = () => {
  const [movie,setMovie] = useState();
  const dispatch = useDispatch();

  const params = useParams();
  useEffect(() => {
      getByMovieId()
  },[])
 const getByMovieId = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${params.id}?api_key=c1a7ae3e52a9a0675b51122ca7f458b0&`
      );
      const data = await response.json()
      setMovie(data)
      console.log(data)
}
let imgString = "https://image.tmdb.org/t/p/w220_and_h330_face/"
  return (
    <>
    <div className='detailss'>
        <div className='left'>
        <img variant="top" src={`${imgString}${movie?.backdrop_path}`} alt='img'/>
        </div>
        <div className='right'>
          <h1>{movie?.original_name}</h1>
          <p>{movie?.tagline}</p>
          <div>
          {movie?.genres?.map((ma,index)=> <span className='genera' key={index}>{ ma.name}</span>)}
          </div>
          <div style={{ width: 50, height: 50,background:"white",borderRadius:22,padding:5 }}
       
        >
          <CircularProgressbar value={movie?.vote_average} text={Math.floor(movie?.vote_average)}  maxValue={10} styles={buildStyles({
           rotation: 0.25,
           strokeLinecap: 'butt',
           pathTransitionDuration: 0.5,
         textSize: '50px', 
        })} />  </div>
        <h3>Overview</h3>
          <p>{movie?.overview}</p>
          <div className='more-details'>
            <div>
              <p>Status : {movie?.status}</p>
              <p>Release Date : {movie?.first_air_date}</p>
              <p>No of Season : {movie?.number_of_seasons }</p>
            </div>
            <div>
              <p>Adult : {movie?.adult ? "Yes": "No"}</p>
              <p>No of Episodes : {movie?.number_of_episodes}</p>
              <p></p>
            </div>
            <div>
              <p>Language  : {movie?.original_language}  </p>
            </div>
          </div>
        <button className='wishlist-btn' onClick={()=>{
          alert("TV")
          dispatch(addTv(movie))
        }}><FaPlus/>WishList</button>
        </div>

    </div>
   
    </>
  )
}

export default TvDetails