import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <>
        <body>
          <section>
            <h3>{this.props.title}</h3>
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${
                  this.props.poster_path
                }`}
              />
            </figure>
            <figcaption>
              <p>{this.props.overview}</p>
              <h4>{this.props.release_date}</h4>
            </figcaption>
          </section>
        </body>
      </>
    )
  }
}

export default Movie
