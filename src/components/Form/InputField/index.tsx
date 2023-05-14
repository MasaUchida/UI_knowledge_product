"use client";

import React, { useState } from "react";

type props = {
  keyDownFunc?: () => {};
  licon?: React.ReactNode;
  ricon?: React.ReactNode;
  placeholder: string;
};

export default function InputField(props: props) {
  const { keyDownFunc, licon, ricon, placeholder } = props;

  //inputデータの取得と保存
  const [searchText, setSearchText] = useState("");
  const ChangeHundle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    setSearchText(e.target.value);
  };

  //Enter時のイベント
  const keyDownHundle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      //Enter押した時の処理 クエリパラメーターとしてserchTextをurlとして作ってブッ込む
      console.log(searchText);
      keyDownFunc && keyDownFunc();
    }
  };

  return (
    <div className="flex h-10 items-center gap-1 rounded-sm border border-solid border-gray-300 px-2">
      <div className="h-6 w-6 bg-black">{licon}</div>
      <input
        onChange={ChangeHundle}
        onKeyDown={keyDownHundle}
        className=" focus-visible:outline-0"
        type="text"
        placeholder={placeholder}
      />
      <div className="h-6 w-6 bg-black">{ricon}</div>
    </div>
  );
}
