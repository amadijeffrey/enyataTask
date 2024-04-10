import React from 'react';
import './TableHeader.scss'

const TableHeader = ({ children }) => {
  return <th>{children}</th>;
};

export default TableHeader;