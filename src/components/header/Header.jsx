import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { SlBag } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { PiTelevisionFill } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";
import {useSelector,useDispatch} from "react-redux"
import { MdOutlineLocalMovies } from "react-icons/md";

import {useNavigate} from "react-router-dom"
import "./header.scss"
import { Link } from 'react-router-dom';
import { closeWishlist, openWishList,removeMovie, removeTv } from '../../redux/slices/wishlist';
import { IMAGE_LINK } from '../../utils/varibles';
const Header = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const[isOpne,setIsOpen] = useState(false);
  const selector=  useSelector(state=>state?.wishList.open)
  const selectorlistMovie=  useSelector(state=>state?.wishList?.movie)
  const selectorlistTv=  useSelector(state=>state?.wishList?.tv)

  console.log(selectorlistMovie)
  console.log(selectorlistTv)

  // const[isWishListOpne,setWishListIsOpen] = useState();
  return (
    <div className='header'>
      {
        isOpne ? ( 
        <div className='slider'>
          <IoMdClose  className='close' onClick={()=>setIsOpen(false)}/>
           <ul>
            <li>
                <Link to={"/search"} className='link'><FaSearch/>Search</Link>
            </li>
            <li>
              <Link to={"/movies"} className='link'><MdOutlineLocalMovies />All Movies</Link>
            </li>
            <li>
              <Link to={"/tv"} className='link'><PiTelevisionFill />All Tv Shows</Link>
            </li>
            <li>
              {/* <Link to={"/wishlist"} className='link'><CiBookmark />Wishlist</Link> */}
            </li>
           </ul>
         </div>
         ) : null
      }
      <GiHamburgerMenu onClick={()=>setIsOpen(true)}/>
      <h2><Link to={"/"}>Movie App</Link></h2>
      <SlBag className='wishlist-logo' onClick={()=>{
               dispatch(openWishList());
              //  setWishListIsOpen(selector)
          
      }}/>{selectorlistMovie.length + selectorlistTv.length}
      {selector && <div className='slider2'>
      <IoMdClose  className='close' onClick={()=>{
        dispatch(closeWishlist());
      }}/>
       <ul>
       {
              selectorlistMovie && <h1>Movie List</h1>
            }
            { selectorlistMovie  &&
              selectorlistMovie?.map((e)=>{
               return <li>
                <button onClick={()=>{dispatch(removeMovie(e.id))}}>X</button>
                <Link to={"details/movie/"+e.id} key={e.id}><img src={IMAGE_LINK+e.backdrop_path} className='imgx' />{e.title}</Link>
                </li>
              })
            }

            {
              selectorlistTv && <h1>TV List</h1>
            }
            { selectorlistTv && 
              selectorlistTv?.map((e)=>{
                return <li>
               <button onClick={()=>dispatch(removeTv(e.id))}>X</button>
                 <Link to={"details/tv/"+e.id}><img src={IMAGE_LINK+e.backdrop_path} className='imgx' />  {e.original_name}</Link>
               </li>
              })
            }
           
           </ul>
      </div>}

    </div>
  )
}

export default Header