import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Repo({ id, name, url }) {
  return <a href={url}>{name}</a>
}
