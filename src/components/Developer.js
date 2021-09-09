import React, { useState, useEffect } from 'react'
import { RepoList } from './RepoList'

export const Developer = ({
  name,
  expertise,
  isFavorite,
  isAvailable,
  handleFavorite,
  interests,
  githubName,
  children,
  setSelectedDev,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div>
      <div className="card">
        <header>
          <h3>{name}</h3>
        </header>
        <div className="card-content">
          <p>
            <span>Expertise:</span>
            {expertise && expertise.map((item) => `${item} `)}
          </p>
          <p>
            <span>Availibility:</span>{' '}
            {isAvailable ? 'On Market' : 'Off Market'}{' '}
          </p>
          {isExpanded ? (
            <a href="#" onClick={handleExpanded}>
              Show Less <i className="fas fa-caret-up" />
            </a>
          ) : (
            <a href="#" onClick={handleExpanded}>
              Show More <i className="fas fa-caret-down" />
            </a>
          )}
          {isExpanded && (
            <div>
              <RepoList ghName={githubName} />
              <p>{interests}</p>
            </div>
          )}
        </div>
        <footer>
          {isFavorite ? (
            <button onClick={() => handleFavorite(name, !isFavorite)}>
              Unfavorite <i className="fas fa-heart" />
            </button>
          ) : (
            <button onClick={() => handleFavorite(name, !isFavorite)}>
              Favorite <i className="far fa-heart" />
            </button>
          )}
        </footer>
      </div>
    </div>
  )
}
