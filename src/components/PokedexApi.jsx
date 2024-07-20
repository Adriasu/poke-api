import React, { useState, useEffect } from "react";
import GameIndices from "./GameIndices";
import TypePokemon from "./TypePokemon";
import MovesPokemon from "./MovesPokemon";
import ItemsPokemon from "./ItemsPokemon";

const PokedexApi = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const idPokemon = 25;

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
    <div className="relative w-[1100px] bg-no-repeat bg-contain bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10ba5f86-4d37-408b-833f-6e8defe939d9/dfsvgoo-e7539b74-012c-480a-b7c6-2eba83733a90.png/v1/fill/w_1017,h_786,q_70,strp/pokedex_template_by_wynautwarrior_dfsvgoo-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODUwIiwicGF0aCI6IlwvZlwvMTBiYTVmODYtNGQzNy00MDhiLTgzM2YtNmU4ZGVmZTkzOWQ5XC9kZnN2Z29vLWU3NTM5Yjc0LTAxMmMtNDgwYS1iN2M2LTJlYmE4MzczM2E5MC5wbmciLCJ3aWR0aCI6Ijw9MTEwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ziZT_G013GKL82hJ-1RqehbgV7v3vd9flKuteGmJf6M')]">
      <h1 className="text-[50px] font-bold absolute left-[80px] top-[22px] bg-[#ffffff] ">{pokemon.name}</h1>
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
