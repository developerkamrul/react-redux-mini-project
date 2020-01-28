import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "Rapture by Koffee ft. Govana", duration: "2" },
    { title: "Don't Start Now by Dua Lipa", duration: "4" },
    { title: "All To Myself by Baby Rose", duration: "3" },
    { title: "See You Again” by Wiz Knalifa ft. Charlie Puth", duration: "4" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});
