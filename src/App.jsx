import React from 'react'
import PokedexApi from './components/PokedexApi'


const App = () => {
  return (
    <div className="p-10 h-lvh flex justify-center items-center bg-cover bg-center bg-no-repeat bg-[url('https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/forest.jpg')] ">
        <PokedexApi/>
    </div>
  )
}

export default App
