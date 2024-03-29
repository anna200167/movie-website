import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaMinus, FaPlus } from "react-icons/fa";
import "./details.scss"
import {useDispatch,useSelector} from 'react-redux'
import { addMovie, openWishList, removeMovie } from './redux/slices/wishlist';
import { AiFillHeart } from 'react-icons/ai';
const Details = () => {
  const [movie,setMovie] = useState();
  const params = useParams();
  const dispatch=useDispatch();
  useEffect(() => {
    getByMovieId()
    window.scrollTo(0, 0);
    
  },[])
  
  const selectorlistTv=  useSelector(state=>state?.wishList?.movie)

  const isAvilable =  selectorlistTv?.findIndex(i=> movie?.id == i.id)
  console.log(isAvilable)
  const getByMovieId = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=c1a7ae3e52a9a0675b51122ca7f458b0&`
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
          <h1>{movie?.title}</h1>
          <h1>{movie?.id}</h1>

          <p>{movie?.tagline}</p>
          <p>Generas</p>
          <div>
          {movie?.genres?.map((ma,index)=>  <span className='genera' key={index}>{ma.name}</span>)}
          </div>
          <div style={{ width: 50, height: 50,background:"white",borderRadius:22,padding:5 }}>
                <CircularProgressbar value={movie?.vote_average} text={Math.floor(movie?.vote_average)} maxValue={10}  styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: 'butt',
                pathTransitionDuration: 0.5,
                textSize: '45px', 
               })} />  
        </div>
        <h3>Overview</h3>
          <p>{movie?.overview}</p>
          <div className='more-details'>
            <div>
              <p>Status : {movie?.release_date}</p>
              <p>Release Date : {movie?.release_date}</p>
              <p>Runtime : {movie?.runtime + "m"}</p>
            </div>
            <div>
              <p>Adult : {movie?.adult ? "Yes": "No"}</p>
              <p>Language : {movie?.original_language} </p>
              <p></p>
            </div>
            <div>
              <p>Box Office Collection  : {movie?.revenue} </p>
            </div>
          </div>

    
          {
         isAvilable >= 0 ? 
          <button className='wishlist-btn' onClick={()=>{
            dispatch(removeMovie(movie.id));
            }}><FaMinus/>UnWish</button>
          :
          <button className='wishlist-btn' onClick={()=>{
            // alert("MOVIE")
            dispatch(addMovie(movie));
            dispatch(openWishList());
            }}><FaPlus/>WishList</button>
        }
          
    
        </div>
    </div>
   
    </>
  )
}

export default Details