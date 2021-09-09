import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function DeveloperList({ developers, setSelectedDev }) {
  return (
    <>
      {developers.map((dev) => (
        <div class="dev card" onClick={() => setSelectedDev(dev)}>
          <p>{dev.name}</p>
        </div>
      ))}
    </>
  )
}
