import React from "react";
import SongList from "./SongList";
import SongDetails from "./SongDetails";
const App = () => {
  return (
    <>
      <div className="container ">
        <h1 className="text-center p-3 border rounded ">
          React Redux Demo Project(mini)
        </h1>

        <div className="row ">
          <div className="col-md-6">
            <SongList />
            <br />
          </div>
          <div className="col-md-6">
            <SongDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
