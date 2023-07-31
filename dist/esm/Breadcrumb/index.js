import React, { memo } from 'react';
import './Breadcrumb.module.less';
import { NavLink } from 'react-router-dom';
var Button = /*#__PURE__*/ memo(function (props) {
  var items = props.items,
    separator = props.separator,
    routes = props.routes;
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
              NavLink,
              {
                to: item.path,
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
