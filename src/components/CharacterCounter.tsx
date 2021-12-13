import React from "react";
import TextInput from "./TextInput";
import CharacterCount from "./CharacterCount";

const CharacterCounter:React.FunctionComponent = () => {
  return (
    <div className="characterCounter">
      <TextInput />
      <CharacterCount />
    </div>
  );
};

export default CharacterCounter;
