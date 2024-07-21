import React from "react";

const TypePokemon = ({ nameType }) => {
  return (
    <div className="flex gap-2 border-double border-[#189e9a] border-[4px] w-[150px] justify-center items-center uppercase bg-[#189e9a] bg-opacity-50">
      {nameType.type.name}
    </div>
  );
};

export default TypePokemon;
