import React from "react";
import { MUSIC } from "../constants/music";
import MusicTop from "../components/music/MusicTop";
import Musicions from "../components/music/Musicions";
import VinylCollections from "../components/music/VinylCollections";

const Music = () => {
  return (
    <div className="py-10 pt-40">
      <MusicTop/>
      <Musicions/>
      <VinylCollections/>
    </div>
  );
};

export default Music;
