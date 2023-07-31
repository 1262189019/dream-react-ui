import React from 'react';
import Breadcrumb from '..';
export default function index1() {
  return /*#__PURE__*/ React.createElement(Breadcrumb, {
    items: [
      {
        title: 'Home',
      },
      {
        title: /*#__PURE__*/ React.createElement(
          'a',
          {
            href: '',
          },
          'Application Center',
        ),
      },
      {
        title: /*#__PURE__*/ React.createElement(
          'a',
          {
            href: '',
          },
          'Application List',
        ),
      },
      {
        title: 'An Application',
      },
    ],
  });
}
