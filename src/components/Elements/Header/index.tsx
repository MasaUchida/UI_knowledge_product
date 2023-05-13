import React from "react";
import HeaderListItem from "./HeaderListItem";
import HeaderImage from "./HeaderImage";

function Header() {
  return (
    <header className="h-full w-60 border-r border-solid border-black">
      <HeaderImage></HeaderImage>
      <ul className="">
        <HeaderListItem label="hogehoge"></HeaderListItem>
        <HeaderListItem label="fugafuga"></HeaderListItem>
        <HeaderListItem label="piyopiyo"></HeaderListItem>
      </ul>
      <div className="absolute bottom-0 h-10 px-4">setting</div>
    </header>
  );
}

export default Header;
