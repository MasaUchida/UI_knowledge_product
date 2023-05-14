"use client";

import React from "react";

type props = {
  label: string;
  radius?: "none" | "sm" | "md";
  eventHundler?: () => {};
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
      } h-10 bg-black p-2 text-white`}
    >
      {label}
    </button>
  );
}

export function Text(props: props) {
  const { label, eventHundler } = props;

  const clickHundle = () => eventHundler;

  return (
    <div className="flex items-center gap-1">
      <div className="h-6 w-6 bg-black"></div>
      <button className="h-10 p-2 text-black" onClick={clickHundle}>
        {label}
      </button>
    </div>
  );
}
