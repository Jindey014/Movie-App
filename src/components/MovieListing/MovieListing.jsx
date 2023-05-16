import React from 'react'
import Slider from 'react-slick'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../redux/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import './MovieListing.scss'
import { settings } from '../../common/settings'

const MovieListing = () => {
  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)
  let renderMovies,
    renderShows = ''
  renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    )

  renderShows =
    shows.Response === 'True' ? (
      shows.Search.map((show, index) => <MovieCard key={index} data={show} />)
    ) : (
      <div className="movies-error">
        <h3>{shows.Error}</h3>
      </div>
    )
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
      </div>
      <div className="movie-container">
        <Slider {...settings}>{renderMovies}</Slider>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
      </div>
      <div className="movie-container">
        <Slider {...settings}>{renderShows}</Slider>
      </div>
    </div>
  )
}

export default MovieListing
