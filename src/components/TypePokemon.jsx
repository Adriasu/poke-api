import { Shapes } from "lucide-react";
import React from "react";

const TypePokemon = ({ nameType }) => {
  return (
    <li className="flex gap-2">
      <Shapes /> {nameType.type.name}
    </li>
  );
};

export default TypePokemon;
