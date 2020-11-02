//Action Creator

export const selectSong = (song) => {
  //return an Action object
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
