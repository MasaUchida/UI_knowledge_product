import React, { ReactNode } from "react";

type props = {
  eventHundler?: () => {};
  licon?: ReactNode;
  ricon?: ReactNode;
  placeholder: string;
};

export default function InputField(props: props) {
  const { licon, ricon, placeholder } = props;

  return (
    <div className="flex h-10 justify-center gap-1 rounded-sm border border-solid border-gray-300">
      <form action="">
        <div className="h-6 w-6">{licon}</div>
        <input
          className=" focus-visible:outline-0"
          type="text"
          placeholder={placeholder}
        />
        <div className="h-6 w-6">{ricon}</div>
      </form>
    </div>
  );
}
