import React, { useState } from 'react'
import { developers as data } from '../data'
import { Developer } from './Developer'
import DeveloperList from './DeveloperList'
import isEmpty from 'lodash/isEmpty'

export const App = () => {
  const [developers, setDevelopers] = useState(data)
  const [selectedDev, setSelectedDev] = useState({})
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
        {isEmpty(selectedDev) ? (
          <>
            <DeveloperList
              developers={developers}
              setSelectedDev={setSelectedDev}
            />
          </>
        ) : (
          <>
            <button class="back-button" onClick={() => setSelectedDev({})}>
              Back to all Developers
            </button>
            <Developer
              key={selectedDev.id}
              name={selectedDev.name}
              expertise={selectedDev.expertise}
              isFavorite={selectedDev.isFavorite}
              isAvailable={selectedDev.isAvailable}
              handleFavorite={handleFavorite}
              interests={selectedDev.interests}
              githubName={selectedDev.githubName}
            />
          </>
        )}
      </div>
    </>
  )
}
