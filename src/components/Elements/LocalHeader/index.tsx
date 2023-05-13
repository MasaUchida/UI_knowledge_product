import React from "react";
import { Primary, Text } from "@/components/Elements/Button";

function LocalHeader() {
  return (
    <div className="flex w-full justify-between border border-b-black p-4">
      <h2 className=" text-3xl">Title</h2>
      <ul className="flex items-center">
        <li>
          <Primary label="hoge" radius="none"></Primary>
        </li>
        <li>
          <Text label="textHoge"></Text>
        </li>
        <li>Search bar</li>
      </ul>
    </div>
  );
}

export default LocalHeader;
