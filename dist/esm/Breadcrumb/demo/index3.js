import React from 'react';
import Breadcrumb from '..';
export default function index1() {
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(Breadcrumb, {
      routes: [
        {
          path: '/home',
          breadcrumbName: 'Home',
        },
        {
          path: '/user',
          breadcrumbName: 'User',
          children: [
            {
              path: '/user1',
              breadcrumbName: 'User1',
            },
            {
              path: '/user2',
              breadcrumbName: 'User2',
            },
          ],
        },
      ],
    }),
  );
}
