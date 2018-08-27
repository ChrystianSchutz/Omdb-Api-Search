import React from 'react'

const StatusHandler = ({ json, isLoading, error, listHandler }) => (
  <div>
    {console.log(json, isLoading, error)}
    {json.Error && <p className="error">Error: {json.Error}</p>}

    {!json.Search &&
      listHandler && <p className="message">The list of movies is empty</p>}

    {isLoading && (
      <div className="spinner">
        <div className="rect1" />
        <div className="rect2" />
        <div className="rect3" />
        <div className="rect4" />
        <div className="rect5" />
      </div>
    )}

    {error && <p>Sorry! There was an network error</p>}
  </div>
)

export default StatusHandler
