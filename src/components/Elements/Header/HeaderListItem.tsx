import React, { ReactElement, ReactNode } from "react";

type props = {
  label: string;
  icon?: ReactNode;
};

function HeaderListItem(props: props) {
  const { label, icon } = props;
  return (
    <li className="flex items-center h-10">
      {icon == true && <div>icon</div>}
      {props.label}
    </li>
  );
}

export default HeaderListItem;
