import { combineRecucers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Buleya', duration: '5:06' },
    { title: 'Muqabla', duration: '4:43' },
    { title: 'Bekhayali', duration: '5:32' },
    { title: 'Ya Ali', duration: '6:36' },
    { title: 'Nadan Parindey', duration: '5:54' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECT') {
    return action.payload;
  }
  return selectedSong;
};

combineRecucers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
