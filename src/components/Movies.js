import React, { Component } from 'react'
import MoviesData from '../data/moviedata'
import Movie from './Movie'

class Movies extends Component {
  render() {
    return (
      <>
        {MoviesData.results.map(movie => {
          return (
            <Movie
              key={movie.id}
              title={movie.title}
              overview={movie.overview}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          )
        })}
      </>
    )
  }
}

export default Movies
