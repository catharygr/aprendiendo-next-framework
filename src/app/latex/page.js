"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import Link from "next/link";

const Latex = dynamic(() => import("react-latex-next"));

function LatexEditor() {
  const [expression, setExpression] = React.useState("$2^4 - 4$");

  return (
    <div>
      <label htmlFor="expression-input">Enter LaTeX</label>
      <input
        id="expression-input"
        type="text"
        value={expression}
        onChange={(event) => setExpression(event.target.value)}
      />

      <h2>Output:</h2>
      <Latex>{expression}</Latex>
      <br />
      <br />
      <Link href="/">Inicio</Link>
    </div>
  );
}

export default LatexEditor;
