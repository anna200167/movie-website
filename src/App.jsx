import Header from "./components/header/Header.jsx"
import Hero from "./components/hero/Hero.jsx"
import Movies from "./components/movie/Movie.jsx"

import './App.css'
import TvShows from "./components/tvshow/TvShows.jsx"
import Footer from "./components/footer/Footer.jsx"


function App() {

  

  return (
    <>
      <div>
         <Hero/>
         <Movies/>
         <TvShows/>
         <Footer/>         
      </div>
    </>
  )
}

export default App
