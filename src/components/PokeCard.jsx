import React from "react";
import CardStats from "./CardStats";

const PokeCard = ({ infoPokemon }) => {
  const cssClassCards =
    "border-[10px] border-[#189e9a] rounded-2xl bg-[#cde68e] bg-opacity-80";
  return (
    <div
      className={`${cssClassCards} w-[360px] h-[620px] p-3 flex flex-col justify-center items-center gap-3`}
    >
      <div className="w-[270px] h-[250px] rounded-full flex justify-center items-center border-[5px] border-[#189e9a] bg-gradient-to-r from-green-400 via-yellow-300 to-green-600">
        <img
          className="h-[250px] flex justify-center items-center"
          src={infoPokemon.sprites.other.dream_world.front_default}
          alt={infoPokemon.name}
        />
      </div>
      <div className="flex w-[300px] text-3xl justify-around font-bold">
        <div className="uppercase border-[5px] border-[#189e9a] rounded-3xl p-1">{infoPokemon.name}</div>
        <div className="border-[5px] border-[#189e9a] rounded-3xl p-1">#{infoPokemon.id}</div>
      </div>
      <div className="w-[360px] h-[226px] flex flex-col items-center">
        {infoPokemon.stats.map((stats, i) => {
          return <CardStats key={i} statsPokemon={stats} />;
        })}
      </div>
    </div>
  );
};

export default PokeCard;
