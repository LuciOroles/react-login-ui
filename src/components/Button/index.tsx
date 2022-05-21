import * as React from "react";
import "./index.css";

export interface IButtonProps {
  label: string;
}

export default function Button({ label }: IButtonProps) {
  return <button className="button-wrapper">{label}</button>;
}
