import React from "react";
import { connect } from "react-redux";

const SongDetails = ({ song }) => {
  if (song) {
    return (
      <div className="col-md-12 p-0 ">
        <div className="card text-center">
          <div className="card-header">
            <h3>Song Details</h3>
          </div>
          <div class="card-body">
            <h4 class="card-title">{song.title}</h4>
            <p class="card-text">Duration : {song.duration} minutes</p>
          </div>
          <div class="card-footer text-muted">2 days ago</div>
        </div>
      </div>
    );
  } else {
    return <h1>No Song is Selected</h1>;
  }
};

function mapStateToProps(state) {
  return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetails);
