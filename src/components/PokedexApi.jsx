import React, { useState, useEffect } from "react";
import GameIndices from "./GameIndices";
import TypePokemon from "./TypePokemon";
import MovesPokemon from "./MovesPokemon";
import ItemsPokemon from "./ItemsPokemon";

const PokedexApi = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const idPokemon = 125;

  const fetchPokemon = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`
      );
      const data = await response.json();
      setPokemon(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  console.log(pokemon);

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
    <div>
      <h1>Nombre: {pokemon.name}</h1>
      <h2>id: {pokemon.id}</h2>
      <p>Experiencia base: {pokemon.base_experience}</p>
      <p>Altura {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
      <div>
        <p>Lista de los juegos en los que ha aparecido: </p>
        <ul>
          {pokemon.game_indices.map((game, i) => {
            return <GameIndices key={i} nameGame={game} />;
          })}
        </ul>
      </div>
      <div>
        <p>Tipo:</p>
        <ul>
          {pokemon.types.map((type, i) => {
            return <TypePokemon key={i} nameType={type} />;
          })}
        </ul>
      </div>
      <div>
        <p>Lista de sus movimientos:</p>
        <ul>
          {pokemon.moves.map((move, i) => {
            return <MovesPokemon key={i} nameMove={move} />;
          })}
        </ul>
      </div>
      <div>
        <p>Item que usa:</p>
        <ul>
          {pokemon.held_items.map((item, i) => {
            return <ItemsPokemon key={i} nameItem={item} />;
          })}
        </ul>
      </div>
      <p>Lista de las áreas de localización</p>
      <p>Galeria</p>
    </div>
  );
};

export default PokedexApi;
