import * as React from 'react'
import { connect } from 'react-redux'
import { debounce } from 'lodash'

import MovieTile from '../MovieTile'
import { fetchData } from '../../modules/action'
import StatusHandler from '../StatusHandler'

class MovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
    this.getMovieList = debounce(this.getMovieList.bind(this), 500)
  }

  getMovieList = query =>
    query &&
    this.props.fetchData(`http://www.omdbapi.com/?s=${query}&apikey=ddbbbf6d`)

  searchThreads = value => this.getMovieList(value)

  render() {
    return (
      <div>
        <div>
          <div className="search">
            <input
              name="search"
              placeholder="search"
              onChange={e => this.searchThreads(e.target.value)}
            />
          </div>
          <StatusHandler
            json={this.props.movieList}
            isLoading={this.props.isLoading}
            error={this.props.hasErrored}
            listHandler
          />
        </div>
        <div className="MovieContainer">
          {this.props.movieList.Search &&
            this.props.movieList.Search.map(movie => {
              return <MovieTile movieJson={movie} key={movie.imdbID} />
            })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    movieList: state.items,
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
)(MovieList)
