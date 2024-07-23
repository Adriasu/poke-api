import React, { useState, useEffect } from "react";
import PokeCard from "./PokeCard";

const PokeList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokeData, setPokeData] = useState([]);
  const [offSet, setOffSet] = useState(20);

  const fetchPokemon = async (offSet, limit) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${offSet}&limit=${limit}`
      );
      const data = await response.json();
      const dataPokemons = data.results.map(async (url) => {
        const response = await fetch(url.url);
        const data = await response.json();
        return data;
      });
      const results = await Promise.all(dataPokemons);
      console.log(pokeData);
      //setPokeData(results)
      setPokeData((prevPokemons) => [...prevPokemons, ...results]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemon(0, 20);
  }, []);

  const handleMore = () => {
    setOffSet((prevOffset) => prevOffset + 10);
    console.log(offSet);
    fetchPokemon(offSet, 10);
  };

const deletePokemon = (id) => {
  setPokeData((prev) => prev.filter(pokemon => pokemon.id !== id))
}


  if (isLoading) {
    return (
      <div className="flex flex-row gap-2">
        <div className="animate-pulse bg-gray-300 w-12 h-12 rounded-full"></div>
        <div className="flex flex-col gap-2">
          <div className="animate-pulse bg-gray-300 w-28 h-5 rounded-full"></div>
          <div className="animate-pulse bg-gray-300 w-36 h-5 rounded-full"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="mb-7 w-[400px]"
        src="https://raw.githubusercontent.com/mauro-au/pokemon/master/assets/img/logo.png"
        alt="pokemon"
      />

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-7">
        {pokeData.map((pokemon, i) => {
          return <PokeCard key={i} infoPokemon={pokemon} funDelete={deletePokemon} />;
        })}
      </div>
      <button
        onClick={handleMore}
        className="border-[5px] border-[#189e9a] rounded-3xl p-1 bg-[#cde68e] bg-opacity-80 mb-7 text-3xl font-bold"
      >
        Give me more!
      </button>
    </div>
  );
};

export default PokeList;
