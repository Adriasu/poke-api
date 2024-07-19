import React, { useState, useEffect } from "react";
import GameIndices from "./GameIndices";

const PokedexApi = () => {
  const [pokemon, setPokemon] = useState([]);
  const idPokemon = 125;

  const fetchPokemon = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`
      );
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div>
      <h1>Nombre: {pokemon.name}</h1>
      <h2>id: {pokemon.id}</h2>
      <p>Experiencia base: {pokemon.base_experience}</p>
      <p>Altura {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
      <div>
        <p>Lista de los juegos en los que ha aparecido: </p>
        <div>
          {pokemon.game_indices.map((game, i) => {
            return <GameIndices key={i} nameGame={game} />;
          })}
        </div>
      </div>
      <p>Tipo</p>
      <p>Lista de sus movimientos</p>
      <p>Item que usa</p>
      <p>Lista de las áreas de localización</p>
      <p>Galeria</p>
    </div>
  );
};

export default PokedexApi;
