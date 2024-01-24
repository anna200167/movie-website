import React, { useEffect, useState } from 'react'
import "./search.scss"  
import { API } from './utils/varibles'
import Card from './components/shared/Card'
import TvCard from './components/shared/TvCard'
const Search = () => {
  const [search,setSearch] = useState();
  const [card,setCard] = useState();
  const [type,setType] = useState("movie")


  useEffect(()=>{
       if(search?.length >= 3) {
          getByMovies()
         
      }
  },[search,type]);
 
  const getByMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/${type}?api_key=${API}&query=${search}`
      // `https://api.themoviedb.org/3/search/tv?api_key=${API}&query=${search}`

    );
    const data = await response.json()
    console.log(data.results);
    setCard(data.results);
}

  return (
    <div className='search'>
      <div className='search-content'>
          <input type='search' alt='search' placeholder='Enter 3 Charater of Movie or Tv Show' onChange={(e)=>{
              setSearch(e.target.value)
          }}/>
          
          <select value={type} onChange={(e)=>{
           setType(e.target.value)
           console.log(e.target.value)
           set
          }}>
            
            <option value={"movie"} selected>Movie</option>
            <option value={"tv"}>TV</option>
          </select>
          {/* <button>Click Me</button> */}
      </div>
      <div className='result'>
        {card && type==="movie" && card?.map((m)=>{
        return <Card datas={m}/>
        }) 
      }
        {/* <Card/>
        <Card/>
        <Card/>
        <Card/>  */}
{card && type==="tv" && card?.map((m)=>{
        return <TvCard datas={m}/>
        }) 
      }
      </div>
    </div>
  )
}

export default Search