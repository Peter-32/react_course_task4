import React, { Component } from 'react';
import { connect } from 'react-redux';

// const SongList = () => {
//     return <div>Song List</div>
// }

class SongList extends Component {
    renderList() {
        console.log(this.props.songs[0])
        return this.props.songs.map( (song) => {
            return (<div className="item" key={song.title}>
                        <div className="right floated content">
                            <button className="ui button primary">Select</button>
                        </div>
                        <div className="content">{song.title}</div>
                    </div>);
        });
    }
    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }

}

const mapStateToProps = (state) => {
    console.log(state);
    return { songs: state.songList };
}

export default connect(mapStateToProps)(SongList);
