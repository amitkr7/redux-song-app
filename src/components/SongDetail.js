import React from 'react';
import { connect } from 'react-redux';

const SongDeatil = ({ song }) => {
  if (!song) {
    return <h3>Select a Song</h3>;
  }
  return (
    <div className='ui two column centered grid'>
      <div className='column'>
        <h3>Song Deatils:</h3>
        <p>Title:{song.title}</p>
        <p>Duration:{song.duration}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDeatil);
