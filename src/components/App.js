import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import { selectSong } from '../messages';

const App = () => {
// console.log(selectSong)
return (
<div>
    <SongList />
    <SongDetail />
</div>
)}

export default App;
