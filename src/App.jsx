import React from "react";
import PokedexApi from "./components/PokedexApi";
import PokeList from "./components/PokeList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokeList/>}/>
        <Route path="/:id" element={<PokedexApi/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

{
  /* <div className="flex flex-col gap-5 justify-center items-center bg-center ] ">
<PokedexApi />
<PokeList />
</div> */
}
