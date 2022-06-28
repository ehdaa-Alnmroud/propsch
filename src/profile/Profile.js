import React from "react";
import propTypes from "prop-types";

const Greet = (props) => {
  return (
    <div className="m">
      <h2>{props.name}</h2>
      <h6>
        <span>profession: </span>
        {props.profession}
      </h6>
      <h6>
        {/* in line style */}
        <span style={{ clear: "#f082ac" }}>bio:</span>
        {props.bio}
      </h6>
      
      <div className="b"> {props.children}</div>
    </div>
  );
};
//  default props for name
Greet.defaultProps = {
  name: "hero",
};
//PropsType to check props.
Greet.prototype = {
  name: propTypes.string,
  bio: propTypes.string,
};
export default Greet;
