import React from 'react';
import SongDetail from './SongDetail';
import SongList from './SongList';

const App = () => {
  return (
    <div className='ui container grid'>
      <div className='row'>
        <div className='column eight wide'>
          <SongList />
        </div>
        <div className='column eight wide'>
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
