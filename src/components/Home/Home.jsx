import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
// import movieApi from '../../common/apis/movieApi'
// import { APIKey } from '../../common/apis/MovieApiKey'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {
  addMovies,
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../redux/movies/movieSlice'

const Home = () => {
  // const movieText = 'Harry'
  const dispatch = useDispatch()
  const movieText = 'Harry'
  const showText = 'Friends'
  useEffect(() => {
    // const fetchMovies = async () => {
    // const response = await movieApi
    //   .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    //   .catch((err) => {
    //     console.log(err)
    //   })
    // dispatch(addMovies(response.data))
    // }
    // fetchMovies()
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showText))
  }, [dispatch])
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  )
}

export default Home
