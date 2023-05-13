import React from "react";

type props = {
  label: string;
  radius?: "none" | "sm" | "md";
};

export function Primary(props: props) {
  const { label, radius } = props;
  return (
    <button
      className={`${
        radius == "md"
          ? "rounded-lg"
          : radius == "sm"
          ? "rounded"
          : "rounded-none"
      } bg-black text-white h-10 p-2`}
    >
      {label}
    </button>
  );
}

export function Text(props: props) {
  const { label, ...rest } = props;
  return <button className="h-10 text-white p-2">{label}</button>;
}
