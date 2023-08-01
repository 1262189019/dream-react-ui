import React from 'react';
import Pagination from '..';
export default function Pagination2() {
  function abc(value) {
    console.log(value);
  }
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(Pagination, {
      total: 100,
      showSumPage: true,
      defaultCurrent: 0,
      handleClick: {
        abc: abc,
      },
      go: true,
    }),
  );
}
