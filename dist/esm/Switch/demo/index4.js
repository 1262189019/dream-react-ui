import React from 'react';
import Switch from '../index';
export default function SwitchDemo2() {
  var handle = function handle(state) {
    alert(state.value);
  };
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(Switch, {
      handleClick: handle,
    }),
  );
}
