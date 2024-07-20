import React, { useState, useEffect } from "react";
import GameIndices from "./GameIndices";
import TypePokemon from "./TypePokemon";
import MovesPokemon from "./MovesPokemon";
import ItemsPokemon from "./ItemsPokemon";
import LocationPokemon from "./LocationPokemon";
import GaleryPokemon from "./GaleryPokemon";
import CardStats from "./CardStats";

const PokedexApi = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const [location, setLocation] = useState(null);
  const [galery, setGalery] = useState(null);
  const idPokemon = 242;

  const fetchPokemon = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`
      );
      const data = await response.json();
      const responseListLocation = await fetch(data.location_area_encounters);
      const dataLocation = await responseListLocation.json();
      const dataGalery = Object.entries(data.sprites)
        .slice(0, 8)
        .filter((link) => {
          return link[1] !== null;
        });
      setPokemon(data);
      setLocation(dataLocation);
      setGalery(dataGalery);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
    return;
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const cssClassCards =
    "border-[10px] border-[#189e9a] rounded-2xl bg-[#cde68e] bg-opacity-80";

    const cssClassBtns = "border-[5px] border-[#189e9a] rounded-3xl p-1"

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
    <div className="flex flex-col text-white w-full rounded-lg bg-contain bg-no-repeat bg-[url('https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/forest.jpg')]">
      <div className="flex gap-8 mt-[150px] w-full h-[620px] justify-center items-center text-black">
        <div className={`w-[1000px] h-[620px] ${cssClassCards} p-[10px]`}>
          <div className="flex">
            <p className={`${cssClassBtns}`}>Height: {pokemon.height}</p>
            <p className={`${cssClassBtns}`}>Weight: {pokemon.weight}</p>
            <div className={`flex ${cssClassBtns}`}>
              <p>Tipo:</p>
              <ul>
                {pokemon.types.map((type, i) => {
                  return <TypePokemon key={i} nameType={type} />;
                })}
              </ul>
            </div>
          </div>

          <p>Experiencia base: {pokemon.base_experience}</p>
        </div>

        <div className="w-[360px] h-[620px] flex flex-col gap-6">
          <div
            className={`flex flex-col justify-center items-center w-[360px] h-[370px] gap-3 ${cssClassCards}`}
          >
            <div className="w-[270px] h-[270px] rounded-full flex justify-center items-center border-[5px] border-[#189e9a] bg-gradient-to-r from-green-400 via-yellow-300 to-green-600">
              <img
                className="h-[250px]"
                src={pokemon.sprites.other.dream_world.front_default}
                alt="pokemon"
              />
            </div>
            <div className="flex w-[300px] text-3xl justify-around font-bold">
              <h1 className="uppercase border-[5px] border-[#189e9a] rounded-3xl p-1">
                {pokemon.name}
              </h1>
              <h2 className="border-[5px] border-[#189e9a] rounded-3xl p-1">
                #{pokemon.id}
              </h2>
            </div>
          </div>

          <div
            className={`w-[360px] h-[226px] ${cssClassCards} flex flex-col p-[10px]`}
          >
            {pokemon.stats.map((stats, i) => {
              return <CardStats key={i} statsPokemon={stats} />;
            })}
          </div>
        </div>
      </div>

      <div>
        <div>
          <p>Lista de los juegos en los que ha aparecido: </p>
          <ul>
            {pokemon.game_indices.map((game, i) => {
              return <GameIndices key={i} nameGame={game} />;
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
        <div>
          <p>Lista de las áreas de localización:</p>
          <ul>
            {location.map((location, i) => {
              return <LocationPokemon key={i} nameLocation={location} />;
            })}
          </ul>
        </div>
        <p>Galeria</p>
        <div>
          {galery.map((link, i) => {
            return <GaleryPokemon key={i} linkGalery={link[1]} />;
          })}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default PokedexApi;
