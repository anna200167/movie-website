import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { API, IMAGE_LINK } from "../../utils/varibles";
import "./hero.scss";
const Hero = () => {
  const [upcommingMovies, setUpcommingMovies] = useState([]);
  useEffect(() => {
    fetchUpcomming();
  }, []);
  const fetchUpcomming = async () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API}`)
      .then((response) => response.json())
      .then((response) => {
        console.table(response);
        setUpcommingMovies(response.results);
      })
      .catch((err) => console.error(err));
  };
  
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img
          src={IMAGE_LINK + upcommingMovies[0]?.backdrop_path}
          alt="First slide"
          className="img"
        />
        <Carousel.Caption>
          <h3>{upcommingMovies[0]?.original_title}</h3>
          <p>{upcommingMovies[0]?.overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={IMAGE_LINK + upcommingMovies[1]?.backdrop_path}
          alt="First slide"
          className="img"
        />
        <Carousel.Caption>
          <h3>{upcommingMovies[1]?.original_title}</h3>
          <p>{upcommingMovies[1]?.overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={IMAGE_LINK + upcommingMovies[2]?.backdrop_path}
          alt="First slide"
          className="img"
        />
        <Carousel.Caption>
          <h3>{upcommingMovies[2]?.original_title}</h3>
          <p>{upcommingMovies[2]?.overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
