import React from 'react'
import { useParams } from 'react-router-dom'
import moviesData from './MoviesData'
import "./MoviePage.css"
function MoviePage() {
    const movies=moviesData["movies"]
    const {id}=useParams()
    
    const movie=movies.find(movie=>(movie.id)===parseInt(id))
    console.log(id);
    console.log(movie);

  return (
    <div className='movie-page'>
      <img src={movie.picture}/>
      <div className='movie-page-content'>
      <div className='movie-page-name'> {movie.name}</div>
      <div className='movie-page-summary'>{movie.summary}</div>
      <div className='movie-page-header'>year Of Release</div>
      <div className='movie-page-yearOfRelease'>{movie.yearOfRelease}</div>
      <div className='movie-page-header'>actors</div>
      <div className='movie-page-actors'>{movie.actors.map(actor=>
        <li>{actor}</li>)}</div>
      <div className='movie-page-header'>duration</div>
      <div className='movie-page-duration'>{movie.duration}</div>
      <div className='movie-page-header'>category</div>
      <div className='movie-page-category'>{movie.category}</div>
      </div>
    </div>
  )
}

export default MoviePage