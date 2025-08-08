import BackButton from "../components/BackButton.jsx";
import Musicions from "../components/music/Musicions.jsx";
import MusicTop from "../components/music/MusicTop";
import VinylCollections from "../components/music/VinylCollections.jsx";

const Music = () => {
  return (
    <div className="py-10 pt-0 ">
      <BackButton/>
      <MusicTop/>
      <Musicions/>
      <VinylCollections/>
    </div>
  );
};

export default Music;
