import React, { useState } from 'react'
import { developers as data } from '../data'
import { Developer } from './Developer'

export const App = () => {
  const [developers, setDevelopers] = useState(data)

  const handleFavorite = (faveDev, isFavorite) => {
    // set state so we can update the objects in the developers array
    const newDevelopers = developers.map((dev) => {
      if (dev.name === faveDev) {
        return { ...dev, isFavorite }
      } else {
        return dev
      }
    })
    setDevelopers(newDevelopers)
  }
  return (
    <>
      <div className="flex center five">
        <h1> Developers for Hire</h1>
      </div>
      <div className="flex center five three-250">
        {developers.map((dev, idx) => {
          return (
            <Developer
              key={idx}
              name={dev.name}
              expertise={dev.expertise}
              isFavorite={dev.isFavorite}
              isAvailable={dev.isAvailable}
              handleFavorite={handleFavorite}
              interests={dev.interests}
              githubName={dev.githubName}
            />
          )
        })}
      </div>
    </>
  )
}
