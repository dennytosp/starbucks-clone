import LocationOnIcon from '@material-ui/icons/LocationOn'
import React from 'react'
import { Link } from 'react-router-dom'
import './FindStore.css'

function FindStore() {
  return (
    <Link to='/' className='findAStore'>
      <LocationOnIcon />
      <h5>Find a store</h5>
    </Link>
  )
}

export default FindStore;