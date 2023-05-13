import React, { ReactElement, ReactNode } from "react";

type props = {
  label: string;
  icon?: ReactNode;
};

function HeaderListItem(props: props) {
  const { label, icon } = props;
  return (
    <li className="flex h-10 items-center">
      {icon && <div>icon</div>}
      {props.label}
    </li>
  );
}

export default HeaderListItem;
