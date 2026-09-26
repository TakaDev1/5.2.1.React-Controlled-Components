import { useState } from "react";

const useTextUpperCase = () => {
  const [text, setText] = useState<string>("");

  const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return {
    text,
    handleText,
  };
};

export default useTextUpperCase;
