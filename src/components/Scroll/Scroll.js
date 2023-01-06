import React from "react";
import "./Scroll.css";

const Scroll = (props) => {
  return (
    <div style={{ overflow: "scroll", width: "522px", height: "482px" }}>
      {props.children}
    </div>
  );
};

export default Scroll;
