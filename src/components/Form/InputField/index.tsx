"use client";
import React, { ReactNode, useState } from "react";

type props = {
  eventHundler?: () => {};
  licon?: ReactNode;
  ricon?: ReactNode;
  placeholder: string;
};

export default function InputField(props: props) {
  const { licon, ricon, placeholder } = props;

  //state
  const [input, setInput] = useState<string>("");

  //setState
  const inputChangeHundle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    setInput(e.target.value);
  };

  //EnterKeyPress
  const enterHundle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log(input);
    }
  };

  return (
    <div className="flex h-10 justify-center gap-1 rounded-sm border border-solid border-gray-300">
      <div className="h-6 w-6">{licon}</div>
      <input
        className=" focus-visible:outline-0"
        type="text"
        placeholder={placeholder}
        onChange={inputChangeHundle}
        onKeyDown={enterHundle}
      />
      <div className="h-6 w-6">{ricon}</div>
    </div>
  );
}
