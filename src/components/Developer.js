import React, { useState } from 'react'

export const Developer = ({ name, expertise, isFavorite, isAvailable, handleFavorite, interests }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  // const { name, expertise } = props

  const handleExpanded = () => {
    setIsExpanded(!isExpanded)
  }
  return (
    <div>
      <div className='card'>
        <header>
          <h3>{name}</h3>
        </header>
        <div className='card-content'>
          <p><span>Expertise:</span>{expertise && expertise.map((item) => `${item} `)}</p>
          <p><span>Availibility:</span> {isAvailable ? 'On Market' : 'Off Market'} </p>
          {isExpanded ? <a href='#' onClick={handleExpanded}>Show Less <i class='fas fa-caret-up' /></a> : <a href='#' onClick={handleExpanded}>Show More <i class='fas fa-caret-down' /></a>}
          {isExpanded &&
            <p>{interests}</p>}
        </div>
        <footer>
          {isFavorite ? (<button onClick={() => handleFavorite(name, !isFavorite)}>Unfavorite <i class='fas fa-heart' /></button>) : <button onClick={() => handleFavorite(name, !isFavorite)}>Favorite <i className='far fa-heart' /></button>}
        </footer>
      </div>
    </div>
  )
}
