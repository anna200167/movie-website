import React, { useEffect, useState } from "react";
import {useSelector} from "react-redux"
import Card from "./components/shared/Card";

const Movies = () => {
    let btns =5;
    let responsePages = 20;
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);
    const current = page;
    useEffect(() => {
        getmovies();
    }, [page]);

    const getmovies = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=c1a7ae3e52a9a0675b51122ca7f458b0&page=${page}`
        );
        const data = await response.json();
        setMovie(data.results);
    };
    const selector = useSelector(state => state?.movie);

    return (
        <div className="container">
            <div
                className="flex-container mt-5 movies"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 12,
                }}
            >
                {movie &&
                    movie?.map((m) => {
                        return <Card datas={m} here={selector} />;
                    })}
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

        </div>
    );
};

export default Movies;
