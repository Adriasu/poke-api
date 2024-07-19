import { Gamepad } from "lucide-react";
import React from "react";

const GameIndices = ({ nameGame }) => {
  return (
    <ul>
      <li className="flex"><Gamepad/> {nameGame.version.name}</li>
    </ul>
  );
};

export default GameIndices;
