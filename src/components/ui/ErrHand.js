import React from "react";

const ErrHand = ({ onRetryClicked }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "140px",
      }}
    >
      <h3>Something Went Wrong</h3>
      <button
        style={{
          marginTop: "15px",
          background: "none",
          padding: "4px 10px",
          border: "1px solid #bc36d9",
          cursor: "pointer",
          borderRadius: "3px",
        }}
        onClick={onRetryClicked}
      >
        Retry <i class="fas fa-undo" style={{ color: "#bc36d9" }}></i>
      </button>
    </div>
  );
};

export default ErrHand;
