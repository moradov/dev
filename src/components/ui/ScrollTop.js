import React from "react";
import "../../style/scroll-top.scss";
const ScrollTop = () => {
  const scrollTopClicked = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <button className="scroll-top" onClick={scrollTopClicked}>
      <i className="fas fa-fighter-jet"></i>
    </button>
  );
};

export default ScrollTop;
