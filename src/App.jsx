import "./index.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WatchList from "./components/WatchList";
import MovieRecom from "./components/MovieRecom";
import Movies from "./components/Movies";
import { useEffect, useState } from "react";
import { MovieContext } from "./components/MovieContext";
import ThemeProvider from "./components/ThemeContext";


function App() {
  const [watchlist , setWatchList] = useState([])

  const handleAddToWatchList = (movieObj)=>{
      let updatedWatchList = [...watchlist, movieObj]
      setWatchList(updatedWatchList)
      console.log(updatedWatchList)

      localStorage.setItem('movies' ,JSON.stringify(updatedWatchList))

      
  }


  useEffect(()=>{
    let moviesFromLs = localStorage.getItem('movies')
    if(!moviesFromLs){
      return 
    }
    setWatchList(JSON.parse(moviesFromLs))
  }, [])





  return (
    <>
  <ThemeProvider>
   <MovieContext.Provider value={{handleAddToWatchList , watchlist}}>
      <BrowserRouter>
        <Navbar />
        <div className="space-y-10 flex flex-wrap">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner /> <Movies/>
                </>
              }
            />

            <Route path="/watchlist" element={<WatchList watchlistData={watchlist} setWatchlistData={setWatchList}  />} />
            <Route path="/recommend" element={<MovieRecom />} />
          </Routes>
        </div>
      </BrowserRouter>
      </MovieContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;