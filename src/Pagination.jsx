import React, { useState } from 'react'
import App from './App'


const Pagination = () => {

    // const buttonConstructor=(i)=>{
    //     return( <button>{i}</button>)
    // }
    const [page,setPage] = useState(1);
    let btns =5;
    let responsePages = 20;
  return (
    <>
    <h3>{page}</h3>

    </>
  )
}

export default Pagination