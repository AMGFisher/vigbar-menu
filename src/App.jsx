import { useState, useEffect } from "react";
import "./style.css";

import supabase from "./Supabase.jsx";
import Nav from "./Nav.jsx";
import Home from "./Home.jsx";
import Cocktails from "./Cocktails.jsx";
import Beer from "./Beer.jsx";
import Wine from "./Wine.jsx";
import Food from "./Food.jsx";
import Liquor from "./Liquor.jsx";

function App() {
  const [data, setData] = useState([]);

  useEffect(function () {
    async function getData() {
      let { data: Menu, error } = await supabase
        .from("Menu")
        .select("*")
        .order("id");
      setData(Menu);
    }
    getData();
  }, []);

  return (
    <>
      <video
        src="disco.mp4"
        autoPlay
        loop
        muted
        playsInline
        type="video/mp4"
        id="video"
      />

      <Nav />
      
      <Home />
      <Cocktails data={data} />
      <Beer data={data} />
      <Wine data={data} />
      <Food data={data} />
      <Liquor data={data} />
      <img src="lizard.png" id="lizard" />
    </>
  );
}

export default App;
