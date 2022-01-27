import React from "react";
import "../../style/pageHeader.scss";
const PageHeader = ({ headerName }) => {
  return (
    <div className="pageHeader">
      <h2>{headerName} </h2>
    </div>
  );
};

export default PageHeader;
