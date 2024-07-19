import { Gamepad } from "lucide-react";
import React from "react";

const GameIndices = ({ nameGame }) => {
  return (
    <li className="flex gap-2">
      <Gamepad /> {nameGame.version.name}
    </li>
  );
};

export default GameIndices;
