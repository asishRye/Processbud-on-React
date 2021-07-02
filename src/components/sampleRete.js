import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useRete } from "./rete";


function Editor() {
  const [setContainer] = useRete();

  return (
    <div
      style={{
        width: "100%",
        height: "100%"
      }}
      ref={(ref) => ref && setContainer(ref)}
    />
  );
}

export default Editor;