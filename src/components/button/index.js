import React from "react";
import classnames from "classnames";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

const Button = ({ children, type, href, to, onClick, width, size }) => {
  const buttonStyles = classnames({
    [styles.main]: true,
    [styles.mainWidthFull]: width === "full",
    [styles.mainWidthAuto]: width === "auto",
    [styles.mainSizeRegular]: size === "regular"
  });
  const childStyles = classnames({
    [styles.children]: true,
    [styles.childrenSizeRegular]: size === "regular"
  });
  const El = href ? "a" : to ? Link : "button";
  return (
    <El
      className={buttonStyles}
      type={type}
      href={href}
      to={to}
      onClick={onClick}
    >
      <span className={childStyles}>{children}</span>
    </El>
  );
};

Button.defaultProps = {
  width: "full",
  size: "regular"
};

export default Button;