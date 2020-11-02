//Action Creator

export const selectSong = (song) => {
  //Return an Action object
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
