export const songSelector = song => {
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
