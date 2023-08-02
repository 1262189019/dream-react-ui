import React from 'react';
import Breadcrumb from '..';
export default function index1() {
  return /*#__PURE__*/ React.createElement(Breadcrumb, {
    separator: '>',
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
        href: '',
      },
      {
        title: /*#__PURE__*/ React.createElement(
          'a',
          {
            href: '',
          },
          'Application List',
        ),
        href: '',
      },
      {
        title: 'An Application',
      },
    ],
  });
}
