import React from "react";
import useTextUpperCase from "../hooks/useTextUpperCase";

const TextUpperCase = () => {
  const { text, handleText } = useTextUpperCase();

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleText}
        placeholder="文字を入力"
        className="border p-2"
      />
      <div>
        <p>{text.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default TextUpperCase;
