import React, { FunctionComponent, CSSProperties } from "react";
import { Link } from "react-router-dom";
import { CustomNavLink } from "./CustomNavLink";

export const PageLink: FunctionComponent<{
  to?: string;
  isExternal?: boolean;
  className?: string;
  style?: CSSProperties;
}> = props => {
  const childContent = (
    <CustomNavLink className={[props.className]}>
      {props.children}
    </CustomNavLink>
  );

  return props.to && !props.isExternal ? (
    <Link to={props.to}>{childContent}</Link>
  ) : (
    <a href={props.to}>{childContent}</a>
  );
};
