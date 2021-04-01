import React, { AnchorHTMLAttributes } from "react";
import { NavLink, useLocation } from "react-router-dom";

const MenuLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, ...otherProps }) => {
  const isHttpLink = href?.startsWith("http");
  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = isHttpLink ? "a" : NavLink;
  const props = isHttpLink ? { href } : { to: href };
  return <Tag {...props} className={props.to === location.pathname ? 'is_active' : ''} {...otherProps} />;
};

export default MenuLink;
