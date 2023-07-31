import React, { memo } from 'react';
import Css from './index.module.less';
var Table = /*#__PURE__*/ memo(function (_ref) {
  var dataSource = _ref.dataSource,
    columns = _ref.columns,
    stripe = _ref.stripe,
    border = _ref.border;
  stripe = stripe ? stripe : false;
  border = border ? border : false;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: Css['table'],
    },
    /*#__PURE__*/ React.createElement(
      'table',
      {
        className: [stripe ? Css['stripe'] : '', border ? Css['border'] : ''].join(''),
      },
      /*#__PURE__*/ React.createElement(
        'thead',
        null,
        /*#__PURE__*/ React.createElement(
          'tr',
          null,
          columns.map(function (item) {
            return /*#__PURE__*/ React.createElement('td', null, item.title);
          }),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        'tbody',
        null,
        dataSource.map(function (item, index) {
          return /*#__PURE__*/ React.createElement(
            'tr',
            null,
            columns.map(function (el) {
              console.log(el.key);
              if (item[el.key]) {
                return /*#__PURE__*/ React.createElement(
                  'td',
                  {
                    rowSpan: item.rowSpanName == el.key ? item.rowSpan : 1,
                    colSpan: item.colSpanName == el.key ? item.colSpan : 1,
                    style: {
                      width: el.width,
                      height: item['height'],
                    },
                    className: Css['td'],
                  },
                  item[el.key],
                );
              }
            }),
          );
        }),
      ),
    ),
  );
});
export default Table;
