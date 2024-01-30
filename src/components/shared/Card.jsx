import React, { useEffect } from 'react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { API ,IMAGE_LINK,NO_IMAGE_LINK} from "../../utils/varibles";
import "./card.scss"
import { Link, useNavigate } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";
import {useDispatch,useSelector} from 'react-redux';
import { addMovie, removeMovie } from '../../redux/slices/wishlist';

const Card = ({datas}) => {
  useEffect(()=>{
  },[])
  const selectorlistMovie=  useSelector(state=>state?.wishList?.movie)

  const isAvilable =  selectorlistMovie?.findIndex(i=> datas.id == i.id)
  console.log(isAvilable);
 const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
    <div className='card' to={"/details/movie/"+datas.id}>

      <img src={datas.backdrop_path? IMAGE_LINK+datas.backdrop_path : NO_IMAGE_LINK}/>
      <div className='rating'>
        <div style={{ width: 50, height: 50,background:"white",borderRadius:22,padding:5 }}
       
        >
        <CircularProgressbar value={datas?.vote_average} text={Math.floor(datas?.vote_average)} maxValue={10} styles={buildStyles({
           rotation: 0.25,
           strokeLinecap: 'butt',
           pathTransitionDuration: 0.5,
           textSize: '50px', 
        })} /> 
        </div>
      </div>
      <div className='details'>
        <Link to={"/details/movie/"+datas.id}>
        <p className='card-title'>{datas?.title}</p>
        </Link>
        <p>{datas?.release_date}</p>


        {
         isAvilable >= 0 ? 
          <AiFillHeart color='red' onClick={()=>dispatch(removeMovie(datas?.id))} /> 
          :
           <CiHeart color='red' onClick={()=>dispatch(addMovie(datas))}/>
        }
      </div>
    </div>
    </>
  )
}

export default Card;