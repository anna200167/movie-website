import React from 'react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { API ,IMAGE_LINK,NO_IMAGE_LINK} from "../../utils/varibles";
import "./card.scss"
import { Link, useNavigate } from 'react-router-dom';

const Card = ({datas}) => {
  const navigate = useNavigate();

  // console.log(props)
  // console.log(datas)
  return (
    <Link className='card' to={"/details/movie/"+datas.id}>
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
        <p className='card-title'>{datas?.title}</p>
        <p>{datas?.release_date}</p>
      </div>
    </Link>
  )
}

export default Card