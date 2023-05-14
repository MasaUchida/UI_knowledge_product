import React from "react";
import * as Button from "@/components/Elements/Button";
import InputField from "@/components/Form/InputField";

function LocalHeader() {
  return (
    <div className="flex w-full justify-between border border-b-black p-4">
      <h2 className=" text-3xl">Title</h2>
      <ul className="flex items-center gap-2">
        <li>
          <Button.Text label="hoge"></Button.Text>
        </li>
        <li>
          <Button.Text label="textHoge"></Button.Text>
        </li>
        <li>
          <InputField placeholder="search"></InputField>
        </li>
      </ul>
    </div>
  );
}

export default LocalHeader;
