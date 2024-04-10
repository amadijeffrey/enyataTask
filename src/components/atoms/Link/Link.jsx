import React from "react";
import { Link } from "react-router-dom";

const LinkTag = ({ children, size, color }) => {
  return (
    <Link href="" style={{ fontSize: size, color: color }}>
      {children}
    </Link>
  );
};

export default LinkTag;
