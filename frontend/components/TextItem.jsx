import React from "react";

const TextItem = ({ text, onClick, selected }) => {
  return (
    <div>
      <span
        onClick={() => onClick(text)}
        style={{ cursor: "pointer", fontWeight: selected ? "bold" : "normal" }}
      >
        {text}
      </span>
    </div>
  );
};

export default TextItem;
