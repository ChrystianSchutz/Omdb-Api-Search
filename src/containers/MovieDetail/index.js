import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchData } from '../../modules/action'
import moviePlaceholder from '../moviePlaceholder.svg'
import StatusHandler from '../StatusHandler'

class MovieDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
    this.getMovieDetails = this.getMovieDetails.bind(this)
  }

  componentDidMount() {
    this.getMovieDetails(this.props.match.params.id)
  }

  getMovieDetails = id =>
    id &&
    this.props.fetchData(`http://www.omdbapi.com/?i=${id}&apikey=ddbbbf6d`)

  render() {
    return (
      <div>
        <Link className="backLink" to={`/`}>
          ⇦ Go back to search
        </Link>
        <StatusHandler
          json={this.props.movieData}
          isLoading={this.props.isLoading}
          error={this.props.hasErrored}
        />
        <div className="detailsContainer">
          <div className="movieDetails">
            <p>{this.props.movieData.Title}</p>
            {this.props.movieData.Poster === 'N/A' ? (
              <img alt="placeholder" src={moviePlaceholder} />
            ) : (
              <img alt="movie poster" src={this.props.movieData.Poster} />
            )}
            <p>Actors: {this.props.movieData.Actors}</p>
            <p>Released: {this.props.movieData.Released}</p>
            <p>Box Office: {this.props.movieData.BoxOffice}</p>
            <p>Director: {this.props.movieData.Director}</p>
            <p>Genre: {this.props.movieData.Genre}</p>
            <p>Language: {this.props.movieData.Language}</p>
            <p>Metascore: {this.props.movieData.Metascore}</p>
            <p>Plot: {this.props.movieData.Plot}</p>
            <p>Year: {this.props.movieData.Year}</p>
            <p>Imdb rating: {this.props.movieData.imdbRating}</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    movieData: state.items,
    hasErrored: state.fetchHasErrored,
    isLoading: state.fetchLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(fetchData(url))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail)
