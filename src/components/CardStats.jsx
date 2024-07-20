import React from "react";

const CardStats = ({ statsPokemon }) => {
  return (
    <div className="flex w-[320px] h-[180px] gap-2 items-center font-bold justify-between">
      <p className="w-[130px]">{statsPokemon.stat.name}:</p>
      <p className="w-[26px]">{statsPokemon.base_stat}</p>
      <div className="bg-[#dbdbdb] w-[140px] h-[8px] rounded-md">
        <div
          className="bg-[#189e9a] h-[8px] rounded-md"
          style={{ width: `${(statsPokemon.base_stat / 255) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default CardStats;
