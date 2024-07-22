import React from 'react'
import PokedexApi from './components/PokedexApi'
import PokeList from './components/PokeList'


const App = () => {
  return (
    <div className="p-10 flex flex-col gap-20 justify-center items-center bg-center bg-[url('https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/forest.jpg')] ">
        <PokedexApi/>
        <PokeList/>
    </div>
  )
}

export default App
