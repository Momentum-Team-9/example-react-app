import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Developer = ({
  name,
  expertise,
  isFavorite,
  isAvailable,
  handleFavorite,
  interests,
  githubName,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [repos, setRepos] = useState([])

  const handleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/${githubName}/repos?per_page=3&sort=created`
      )
      .then((response) => {
        setRepos(response.data.map((repo) => [repo.name, repo.html_url]))
      })
  }, [])

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
              <ul class="repos">
                {repos.map((repo) => (
                  <li class="repo">
                    <a href={repo[1]}>{repo[0]}</a>
                  </li>
                ))}
              </ul>
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
