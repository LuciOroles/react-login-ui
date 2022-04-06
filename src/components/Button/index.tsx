import * as React from "react";

export interface IButtonProps {
  label: string;
}

export default function Button({ label }: IButtonProps) {
  return (
    <button
      style={{ fontSize: "33px" }}
      onClick={() => {
        console.log("eee");
      }}
    >
      {label}
    </button>
  );
}
