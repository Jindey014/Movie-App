import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (term) => {
    // const movieText = 'Harry'

    const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${term}&type=movie`)
        .catch((err) => {
            console.log(err)
        })
    return response.data
})

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async (term) => {
    // const seriesText = 'Friends'

    const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${term}&type=series`)
        .catch((err) => {
            console.log(err)
        })
    return response.data
})

export const fetchAsyncDetail = createAsyncThunk("movies/fetchAsyncDetail", async (id) => {
    const response = await movieApi
        .get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
    return response.data
})

const initialState = {
    movies: {},
    shows: {},
    selectedMovieorShow: {},
}

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
        removeSelectedMovie: (state) => {
            state.selectedMovieorShow = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched Sucessfully")
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected")
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched Sucessfully")
            return { ...state, shows: payload }
        },
        [fetchAsyncDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched Sucessfully")
            return { ...state, selectedMovieorShow: payload }
        },
    }
})

export const { addMovies } = moviesSlice.actions;
export const { removeSelectedMovie } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedDetail = (state) => state.movies.selectedMovieorShow
export default moviesSlice.reducer;