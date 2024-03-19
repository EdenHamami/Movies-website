import React from 'react'
import MovieCard from './MovieCard';
import "./MoviesList.css"
function MoviesList(props) {

  const {relevantMovies}=props
  return (
    <div className='movies-list-container'>
            {relevantMovies.map(movie=>(
            <MovieCard key={movie.id} movie={movie}/>
        ))}
    </div>
  )
}

export default MoviesList