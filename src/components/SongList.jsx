import React from "react";
import { connect } from "react-redux";
import { songSelector } from "../actions";

const SongList = props => {
  console.log(props.selectedSong);
  return (
    <div>
      <ul className="list-group">
        {props.songs.map(song => {
          return (
            <li key={song.title} className="list-group-item">
              <span>{song.title}</span>
              <button
                onClick={() => props.songSelector(song)}
                className="btn btn-md btn-primary float-right"
              >
                Select
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { songs: state.songs };
};
export default connect(mapStateToProps, { songSelector })(SongList);
