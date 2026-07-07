import React from "react";
import { MUSIC } from "../constants/music";
import MusicTop from "../components/music/MusicTop";
import Musicions from "../components/music/Musicions";
import VinylCollections from "../components/music/VinylCollections";
import BackButton from "../components/BackButton";

const Music = () => {
  return (
    <div className="py-10 pt-10">
      <BackButton />
      <MusicTop />
      <Musicions />
      <VinylCollections />
    </div>
  );
};

export default Music;
