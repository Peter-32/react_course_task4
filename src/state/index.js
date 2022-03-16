import { combineReducers } from 'redux';

const songListData = () => {
    return [
        { title: 'song1', duration: '4:01' },
        { title: 'song2', duration: '4:02' },
        { title: 'song3', duration: '4:03' },
    ];
};

const selectedSongData = (value = null, message) => {
    if (message.type == "SELECTED_SONG") {
        value = message.payload;
    }
    return value;
};

export default combineReducers({
    songList: songListData,
    selectedSong: selectedSongData
});
