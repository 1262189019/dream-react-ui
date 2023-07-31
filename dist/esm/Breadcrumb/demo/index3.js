import React from 'react';
import Breadcrumb from '..';
import { HashRouter } from 'react-router-dom';
export default function index1() {
  return /*#__PURE__*/ React.createElement(
    HashRouter,
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
