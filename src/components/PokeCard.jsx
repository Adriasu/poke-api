import React from "react";
import CardStats from "./CardStats";
import { Trash2 } from "lucide-react";

const PokeCard = ({ infoPokemon, funDelete }) => {
  const bgColorCard = () => {
    if (infoPokemon.id % 2 === 0) {
      return "bg-[#cde68e]";
    } else {
      return "bg-[#63994e] text-[#0c014d]";
    }
  };

  const imgCard = () => {
    if (infoPokemon.sprites.other.dream_world.front_default !== null) {
      return (infoPokemon.sprites.other.dream_world.front_default)
    } else {
      return (infoPokemon.sprites.other['official-artwork'].front_default)
    }
  }

  const deletePokemon = () => {
    funDelete(infoPokemon.id)
  }

  const cssClassCards =
    "border-[10px] border-[#189e9a] rounded-2xl bg-opacity-80";
  return (
    <div
      className={`${cssClassCards} ${bgColorCard()} w-[360px] h-[620px] p-3 flex flex-col justify-center items-center gap-3 relative`}
    >
      <button
        onClick={deletePokemon}
        className="absolute top-3 right-3 size-8 rounded-full flex justify-center items-center bg-[#189e9a]"
      >
        <Trash2 />
      </button>
      <div className="w-[270px] h-[250px] rounded-full flex justify-center items-center border-[5px] border-[#189e9a] bg-gradient-to-r from-green-400 via-yellow-300 to-green-600">
        <img
          className="h-[250px] flex justify-center items-center"
          src={imgCard()}
          alt="https://www.google.com/search?sca_esv=254691dbe0298750&rlz=1C1UEAD_esES928ES928&sxsrf=ADLYWIJBT90q0QexW-Kwly4jueyPtjBIOA:1721735452556&q=pokemon+titulo+png&udm=2&fbs=AEQNm0CbCVgAZ5mWEJDg6aoPVcBgWizR0-0aFOH11Sb5tlNhd3zC4y7ZXTSrvvSBSNjw8fVX3G3tS3bGsqQeBBxb6Hy8QMktPbZ5tlXB9QufHYDIUU3RlFi1QS5IH2B-uHhf1Ar7zwncGzhjjXM7WwykVkpr2aYDQ44gNYxmUDe8MRVpUN63oVc&sa=X&ved=2ahUKEwjG0q-wjL2HAxV3UUEAHWa8AA4QtKgLegQIDhAB&biw=1536&bih=730&dpr=1.25#vhid=uTOm31sAW8oeJM&vssid=mosaic"
        />
      </div>
      <div className="flex w-[300px] text-3xl justify-around font-bold">
        <div className="uppercase border-[5px] border-[#189e9a] rounded-3xl p-1">
          {infoPokemon.name}
        </div>
        <div className="border-[5px] border-[#189e9a] rounded-3xl p-1">
          #{infoPokemon.id}
        </div>
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
