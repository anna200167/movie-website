import React, { useEffect, useState } from 'react'
import Card from './components/shared/Card';
import TvCard from './components/shared/TvCard';

const Tv = () => {
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);

  

    useEffect(() => {
        getmovies()
    }, [page])




    const getmovies = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/discover/tv?api_key=c1a7ae3e52a9a0675b51122ca7f458b0&page=${page}`
        );
        const data = await response.json()
        setMovie(data.results)
    }
  
    return (
        <div className='container'>

            <div className='flex-container mt-5 movies' style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:12}}>
            {movie  &&
            movie?.map(m=>{
             return <TvCard datas={m}/>
            })
          }
            </div>
            <div className='text-center  p-5'>
                <button className='btn btn-primary m-5' disabled={page === 1 ? true : false}
                    onClick={() => {
                        setPage((page) => { return page = page - 1; })
                    }}
                > PREVIOUS</button>
                <button className='btn btn-primary m-5'
                    onClick={() => {
                        setPage((page) => { return page = page + 1; })
                    }}>NEXT</button>
                <p>Page: {page}</p>
            </div>
            {/* {JSON.stringify(movies)} */}

        </div>
    )
}

export default Tv