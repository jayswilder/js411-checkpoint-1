import { useState, useEffect } from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
    {
      title: "Unbreakable",
      artist: "Andy Ray",
      img_src: "./images/album-cover.jpg",
      src: "./music/Unbreakable.mp3"
    },
    {
      title: "Hard Rock",
      artist: "Andy Ray",
      img_src: "./images/album-cover.jpg",
      src: "./music/Hard Rock.mp3"
    },
    {
      title: "Can't Stop Me",
      artist: "Andy Ray",
      img_src: "./images/album-cover.jpg",
      src: "./music/Can't Stop Me.mp3"
    },
    {
      title: "Let's Rock",
      artist: "Andy Ray",
      img_src: "./images/album-cover.jpg",
      src: "./music/Lets Rock.mp3"
    },
    {
      title: "Be Faster",
      artist: "Andy Ray",
      img_src: "./images/album-cover.jpg",
      src: "./music/Be Faster.mp3"
    },
    {
      title: "Fatality Racer",
      artist: "Andy Ray",
      img_src: "./images/album-cover.jpg",
      src: "./music/Fatality Racer.mp3"
    },
    {
      title: "Rage Machine",
      artist: "Andy Ray",
      img_src: "./images/album-cover.jpg",
      src: "./music/Rage Machine.mp3"
    },
    {
      title: "No Way Back",
      artist: "Andy Ray",
      img_src: "./images/album-cover.jpg",
      src: "./music/No Way Back.mp3"
    },
    {
      title: "Time For Action",
      artist: "Andy Ray",
      img_src: "./images/album-cover.jpg",
      src: "./music/Time For Action.mp3"
    },
    {
      title: "Heart of the Warrior",
      artist: "Andy Ray",
      img_src: "./images/album-cover.jpg",
      src: "./music/Heart of the Warrior.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
