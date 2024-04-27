import React, { useEffect, useState } from 'react'

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
//2313804c
const API_URL = 'https://omdbapi.com?apikey=2313804c';

// const movie1 ={
  
//     "Title": "Viet Costas - Citizenship: Undefined",
//     "Year": "2014",
//     "imdbID": "tt3838986",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BY2NhNzEzZDctZDkxYy00MmZhLWIyN2UtNWEzOTA0Y2VhYWY5XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg"

  
// }
const App = () => {
  const [movies ,setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');
  const searchMovie = async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search);
  } 

  useEffect(()=>{
     searchMovie()
  },[]);
  return (
    <div className="app">
      <h1>MovieLand</h1>
  
      <div className="search">
      <input
       placeholder='Search For Movies'
       value={searchTerm}
       onChange={(e)=>{setSearchTerm(e.target.value)}}
       />
       <img 
       src={SearchIcon} 
       alt="search"
       onClick={()=>{searchMovie(searchTerm)}}
       
       />
    </div>
{
  movies?.length > 0
   ? (
    <div className="container">
      {movies.map((movie)=>(

           <MovieCard movie={movie} />
      ))}

    </div>
    
   ):(
    <div className="empty">
      <h2>No Movies Found</h2>
    </div>
   )
}

    
    </div>
    
  )
}

export default App