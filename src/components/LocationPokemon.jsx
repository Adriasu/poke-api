import { MapPin } from 'lucide-react'
import React from 'react'

const LocationPokemon = ({nameLocation}) => {
  return (
    <li className="flex gap-2">
        <MapPin/> {nameLocation.location_area.name}
    </li>
  )
}

export default LocationPokemon
