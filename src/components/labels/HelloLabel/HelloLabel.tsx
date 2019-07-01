import React from "react";

interface Props {
  text: string;
}

function HelloLabel(props: Props) {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
}

export default HelloLabel;
