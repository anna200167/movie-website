import React from 'react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { API ,IMAGE_LINK,NO_IMAGE_LINK} from "../../utils/varibles";
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"
import "./card.scss"
import { AiFillHeart } from 'react-icons/ai';
import { CiHeart } from 'react-icons/ci';
import { addTv, removeTv } from '../../redux/slices/wishlist';
const TvCard = ({datas}) => {
  const navigate = useNavigate();
  // console.log(props)
  // console.log(datas)
  const selectorlistTv=  useSelector(state=>state?.wishList?.tv)

  const isAvilable =  selectorlistTv?.findIndex(i=> datas.id == i.id)
  const dispatch = useDispatch();

  return (
    <div className='card'>

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
        <Link to={"/details/tv/"+datas.id}>
        <p className='card-title'>{datas?.name}</p>
        </Link>
        {
         isAvilable >= 0 ? 
          <AiFillHeart color='red' onClick={()=>dispatch(removeTv(datas?.id))} /> 
          :
           <CiHeart color='red' onClick={()=>dispatch(addTv(datas))}/>
        }
    </div>
    </div>
  )
}

export default TvCard