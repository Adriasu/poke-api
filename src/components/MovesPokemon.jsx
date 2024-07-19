import { Swords } from "lucide-react";
import React from "react";

const MovesPokemon = ({ nameMove }) => {
  return (
    <li className="flex gap-2">
      <Swords /> {nameMove.move.name}
    </li>
  );
};

export default MovesPokemon;
