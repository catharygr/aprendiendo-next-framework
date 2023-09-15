"use client";
import React, { useState } from "react";

export default function Boton() {
  const [color, setColor] = useState("red");
  return <button onClick={() => setColor("yelow")}>{color}</button>;
}
