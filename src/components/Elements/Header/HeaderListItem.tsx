import React, { ReactElement, ReactNode } from "react";

type props = {
  label: string;
  icon?: ReactNode;
};

function HeaderListItem(props: props) {
  const { label, icon } = props;
  return (
    <>
      {icon == true && <div>icon</div>}
      {props.label}
    </>
  );
}

export default HeaderListItem;
