import React from "react";
import HeaderListItem from "./HeaderListItem";
import HeaderImage from "./HeaderImage";

function Header() {
  return (
    <div className="h-full w-60">
      <HeaderImage></HeaderImage>
      <div className="flex flex-col h-full">
        <ul className="h-full">
          <HeaderListItem label="hogehoge"></HeaderListItem>
          <HeaderListItem label="fugafuga"></HeaderListItem>
          <HeaderListItem label="piyopiyo"></HeaderListItem>
        </ul>
        <div>setting</div>
      </div>
    </div>
  );
}

export default Header;
