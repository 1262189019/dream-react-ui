import React from 'react';
import Pagination from '../index';
var ParentComponent = function ParentComponent() {
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(Pagination, {
      small: true,
      disabled: true,
    }),
  );
};
export default ParentComponent;
