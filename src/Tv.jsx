import React, { useEffect, useState } from 'react'
import Card from './components/shared/Card';
import TvCard from './components/shared/TvCard';

const Tv = () => {
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);

    let btns =5;
    let responsePages = 20;

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
            <div className="d-flex align-center justify-center text-center">
                
                {
                (
                    ()=>
                    {
                            const bts=[]; 
                            if(responsePages <= btns){
                                (()=>{
                                    for(let i=1;i<=responsePages;i++){
                                        bts.push(<button className="btn btn-primary m-2" onClick={()=>{setPage(i)}} key={i}>{i}</button>);
                                    }
                                    console.log("1")
                                    console.log(bts)
                                    return
                                }
                                )()
                            }
                            else{
                            
                            if(page < btns){
                                (()=>{
                                    for(let i=1;i<=btns;i++){
                                        bts.push(<button className="btn btn-primary m-2" onClick={()=>{setPage(i)}} key={i}>{i}</button>);
                                    }
            
                                    bts.push(<button className="btn btn-primary m-2">{"..."}</button>)
                                    bts.push(<button className="btn btn-primary m-2" onClick={()=>{setPage(responsePages)}} key={responsePages}>{responsePages}</button>)
            
                                    console.log("2")
                                    console.log(bts)
                                    return
                                }
                                )()
                            }else if(page > (responsePages-btns+1)){
            
                                (()=>{
                                    bts.push(<button className="btn btn-primary m-2" onClick={()=>{setPage(1)}} key={1}>{1}</button>)
                                    bts.push(<button className="btn btn-primary m-2" >{"..."}</button>)
                                    for(let i=(responsePages-btns+1);i<=responsePages;i++){
                                        bts.push(<button className="btn btn-primary m-2" onClick={()=>{setPage(i)}} key={i}>{i}</button>);
                                    }
                                    console.log("3")
                                    console.log(bts)
                                    return
                                }
                                )()
                            }else{
                                (()=>{
                                    bts.push(<button className="btn btn-primary m-2" onClick={()=>{setPage(1)}} key={1}>{1}</button>)
                                    bts.push(<button className="btn btn-primary m-2" >{"..."}</button>)
                                    for(let i=page;i<=(page+btns-1);i++){
                                        bts.push(<button className="btn btn-primary m-2" onClick={()=>{setPage(i)}} key={i}>{i}</button>);
                                    }
                                    bts.push(<button className="btn btn-primary m-2" >{"..."}</button>)
                                    bts.push(<button className="btn btn-primary m-2" onClick={()=>{setPage(responsePages)}} key={1}>{responsePages}</button>)
                                    console.log("4")
                                    console.log(bts)
                                    return
                                }
                                )()
                            }
                            }
                 
                            return bts;
                    }
            
                        )()
                    }
                            </div>
            {/* {JSON.stringify(movies)} */}
                    
        </div>
    )
}

export default Tv