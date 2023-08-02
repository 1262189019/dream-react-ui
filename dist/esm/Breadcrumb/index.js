import React, { memo } from 'react';
import './Breadcrumb.module.less';
var Button = /*#__PURE__*/ memo(function (_ref) {
  var items = _ref.items,
    separator = _ref.separator,
    routes = _ref.routes;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'Breadcrumb',
    },
    items
      ? items.map(function (item) {
          return /*#__PURE__*/ React.createElement(
            'div',
            {
              className: 'nav',
            },
            item.title,
            ' ',
            /*#__PURE__*/ React.createElement(
              'span',
              {
                className: 'nav_one',
              },
              separator ? separator : '/',
            ),
            ' ',
          );
        })
      : routes.map(function (item) {
          return /*#__PURE__*/ React.createElement(
            'div',
            {
              className: 'nav',
            },
            /*#__PURE__*/ React.createElement(
              'a',
              {
                href: item.path,
              },
              item.breadcrumbName,
            ),
            ' ',
            /*#__PURE__*/ React.createElement(
              'span',
              {
                className: 'nav_one',
              },
              separator ? separator : '/',
            ),
          );
        }),
  );
});
export default Button;
