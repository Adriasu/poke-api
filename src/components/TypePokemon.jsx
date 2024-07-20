import React from "react";

const TypePokemon = ({ nameType }) => {
  return <li className="flex gap-2">{nameType.type.name}</li>;
};

export default TypePokemon;
