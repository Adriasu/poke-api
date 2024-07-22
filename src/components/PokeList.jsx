import React from 'react'

const PokeList = () => {

    const fetchPokemon = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`)
            const data = await response.json()
            console.log(data);
            




        } catch (error) {
            console.log(error)
        }
    }

fetchPokemon()





  return (
    <div>
      
    </div>
  )
}

export default PokeList
