import React from 'react'

const CardStats = ({statsPokemon}) => {
  return (
    <div>
        <p>{statsPokemon.stat.name}: {statsPokemon.base_stat}</p>
    </div>
  )
}

export default CardStats
