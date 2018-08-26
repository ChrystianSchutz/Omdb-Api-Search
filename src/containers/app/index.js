import React from 'react'
import { Route } from 'react-router-dom'
import MovieList from '../MovieList'
import MovieDetail from '../MovieDetail'

const App = () => (
  <div>
    <header>
      <p className="headerText">
        Omdb Api Search for Ksubaka - Chrystian Schutz
      </p>
    </header>
    <main>
      <Route exact path="/" component={MovieList} />
      <Route exact path="/movie/:id" component={MovieDetail} />
    </main>
  </div>
)

export default App
