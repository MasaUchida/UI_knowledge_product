import React from "react";
import HeaderListItem from "./HeaderListItem";

function Header() {
  return (
    <div>
      <div>Header</div>
      <HeaderListItem label="hogehoge"></HeaderListItem>
      <HeaderListItem label="fugafuga"></HeaderListItem>
      <HeaderListItem label="piyopiyo"></HeaderListItem>
    </div>
  );
}

export default Header;
