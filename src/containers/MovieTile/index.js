import React from 'react'
import { Link } from 'react-router-dom'
import moviePlaceholder from '../moviePlaceholder.svg'

const MovieTile = ({ movieJson }) => (
  <div className="MovieTile">
    <Link to={`/movie/${movieJson.imdbID}`}>
      <p className="title">{movieJson.Title}</p>
    </Link>
    {movieJson.Poster === 'N/A' ? (
      <img  alt="placeholder" src={moviePlaceholder} />
    ) : (
      <img alt="movie poster" src={movieJson.Poster} />
    )}

    <p className="year">Year: {movieJson.Year}</p>
  </div>
)

export default MovieTile
