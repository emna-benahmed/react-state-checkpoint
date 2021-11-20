import React, { useState } from "react";
import "./hooks.css";
import file from "../file";

function Hooks() {

  const [shows, setShows] = useState(0);

  return (
    <div>
      <button
        className="btn"
        onClick={(shows) => (shows = 0) ? setShows(shows == 1) : setShows(shows == 0)}>
        click and see
      </button>
      {shows ? <file /> : <div>"click to see the profile"</div>}
    </div>
  );
}

export default Hooks;