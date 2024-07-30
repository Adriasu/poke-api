import React, { useState, useEffect } from "react";
import GameIndices from "./GameIndices";
import TypePokemon from "./TypePokemon";
import MovesPokemon from "./MovesPokemon";
import ItemsPokemon from "./ItemsPokemon";
import LocationPokemon from "./LocationPokemon";
import GaleryPokemon from "./GaleryPokemon";
import CardStats from "./CardStats";
import { Link, useParams } from "react-router-dom";

const PokedexApi = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [location, setLocation] = useState([]);
  const [galery, setGalery] = useState([]);
  const {id} = useParams()

  const fetchPokemon = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}/`
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

  const imgCard = () => {
    if (pokemon.sprites.other.dream_world.front_default !== null) {
      return (pokemon.sprites.other.dream_world.front_default)
    } else {
      return (pokemon.sprites.other['official-artwork'].front_default)
    }
  }

  const cssClassCards =
    "border-[10px] border-[#189e9a] rounded-2xl bg-[#cde68e] bg-opacity-80";

  const cssClassBtns = "border-[5px] border-[#189e9a] rounded-3xl p-1";

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
      <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmE0NndjenZ3d3dsNnRub21idGt5YnZmMGo4N3UzNWdnMWZycGIyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/W2LPUUdHkPFNLaWwPZ/giphy.webp" alt="" />
      </div>
    );
  }
  return (
    <div className="relative flex flex-col gap-8 justify-center items-center text-black bg-cover bg-center bg-[url('https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/forest.jpg')]">
      <img
        className="w-[300px] mt-3"
        src="https://raw.githubusercontent.com/mauro-au/pokemon/master/assets/img/logo.png"
        alt="Pokemon"
      />
      
        <Link className={`${cssClassBtns} bg-[#cde68e] bg-opacity-80 text-lg font-bold absolute top-[90px] left-20 p-2`} to={"/"}>Back</Link>
      
      <div className="flex gap-8 justify-center items-center text-black">
        <div
          className={`max-w-[1000px] h-[620px] ${cssClassCards} p-[10px] flex gap-3`}
        >
          <div className="w-[600px] flex flex-col gap-3 ">
            <div className="w-full h-[200px] grid grid-cols-2 gap-3">
              <div
                className={`${cssClassBtns} overflow-auto scrollbar-hide flex flex-col gap-2`}
              >
                <p className="font-bold">Games: </p>
                <ul>
                  {pokemon.game_indices.map((game, i) => {
                    return <GameIndices key={i} nameGame={game} />;
                  })}
                </ul>
              </div>

              <div
                className={`${cssClassBtns} overflow-auto scrollbar-hide flex flex-col gap-2`}
              >
                <p className="font-bold">Moves:</p>
                <ul>
                  {pokemon.moves.map((move, i) => {
                    return <MovesPokemon key={i} nameMove={move} />;
                  })}
                </ul>
              </div>
            </div>

            <div className="flex flex-col h-[400px] gap-3">
              <div
                className={`${cssClassBtns} overflow-auto scrollbar-hide flex flex-col gap-2 h-[242px]`}
              >
                <p className="font-bold">Location:</p>
                <ul>
                  {location.map((location, i) => {
                    return <LocationPokemon key={i} nameLocation={location} />;
                  })}
                </ul>
              </div>

              <div
                className={`${cssClassBtns} flex overflow-x-auto scrollbar-hide`}
              >
                {galery.map((link, i) => {
                  return <GaleryPokemon key={i} linkGalery={link[1]} />;
                })}
              </div>
            </div>
          </div>
          <div className="w-[370px] flex flex-col gap-6 text-3xl font-medium">
            <div className="flex flex-col gap-5 justify-around">
              <div
                className={`${cssClassBtns} flex flex-col h-[120px] justify-between px-8 py-3`}
              >
                <div className="flex justify-between">
                  <p>Height</p>
                  <p>{(pokemon.height / 10).toFixed(2)} m</p>
                </div>
                <div className="flex justify-between border-dashed border-[#189e9a] border-t-[2px]">
                  <p>Weight</p>
                  <p>{(pokemon.weight / 10).toFixed(2)} kg</p>
                </div>
              </div>
              <div className="flex justify-around">
                {pokemon.types.map((type, i) => {
                  return <TypePokemon key={i} nameType={type} />;
                })}
              </div>
            </div>

            <hr className="border-dashed border-[#189e9a] border-[2px]" />

            <div className="flex flex-col items-center gap-5">
              <div
                className={`${cssClassBtns} w-[250px] text-center flex justify-between px-8 py-3`}
              >
                <p>Exp:</p>
                <p>{pokemon.base_experience}</p>
              </div>
              <div
                className={`${cssClassBtns} w-full h-[255px] px-8 py-3 flex flex-col gap-3`}
              >
                <p>Item:</p>
                <ul>
                  {pokemon.held_items.map((item, i) => {
                    return <ItemsPokemon key={i} nameItem={item} />;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[360px] h-[620px] flex flex-col gap-6">
          <div
            className={`flex flex-col justify-center items-center w-[360px] h-[370px] gap-3 ${cssClassCards}`}
          >
            <div className="w-[270px] h-[270px] rounded-full flex justify-center items-center border-[5px] border-[#189e9a] bg-gradient-to-r from-green-400 via-yellow-300 to-green-600">
              <img
                className="h-[250px] flex justify-center items-center"
                src={imgCard()}
                alt={pokemon.name}
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
    </div>
  );
};

export default PokedexApi;


