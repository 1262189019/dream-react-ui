import React from 'react';
import Button from '..';
export default function ButtonDemo2() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    width: 80,
    height: 50
  }, "\u5C0F\u578B\u6309\u94AE"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    width: 120,
    height: 70
  }, "\u4E2D\u578B\u6309\u94AE"), /*#__PURE__*/React.createElement(Button, {
    type: "warning",
    width: 150,
    height: 90
  }, "\u5927\u578B\u6309\u94AE"));
}