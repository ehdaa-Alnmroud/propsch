import React from 'react'

const Saidbar = () => {
  return (
    <div className="Superhero">
      <img
        className="Superheroimg"
        src="./img/Superhero-pana.svg"
        alt="Superhero"
      ></img>
      {/* the inline style */}
      <h3 style={{ fontWeight: "bold" }}>
        Learn about the most powerful<span className="haro"> superhero </span>{" "}
        characters
      </h3>
      <h3>their special skills and weaknesses</h3>
    </div>
  );
}

export default Saidbar
