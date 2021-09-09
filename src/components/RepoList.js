import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Repo from './Repo'

export const RepoList = ({ ghName }) => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const reposUrl = `https://api.github.com/users/${ghName}/repos?per_page=3&sort=created&order=desc`
    axios.get(reposUrl).then((response) => {
      setRepos(response.data)
      setLoading(false)
    })
  }, [])

  return (
    <ul className="repos">
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          {repos.map((repo) => (
            <li className="repo">
              <Repo
                id={repo.id}
                name={repo.name}
                url={repo.html_url}
                key={repo.id}
              />
            </li>
          ))}
        </>
      )}
    </ul>
  )
}
