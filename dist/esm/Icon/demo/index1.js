import React from 'react';
import Icon from '../index';
import icons from '../../util/iconPathCompatible';
export default function IconDemo1() {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      style: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
    },
    icons.map(function (item, index) {
      return /*#__PURE__*/ React.createElement(
        'div',
        {
          style: {
            padding: '20px 0',
            textAlign: 'center',
            width: '18%',
            backgroundColor: '#e5e7eb',
            marginBottom: '10px',
          },
        },
        /*#__PURE__*/ React.createElement(Icon, {
          key: index,
          name: item,
        }),
        /*#__PURE__*/ React.createElement(
          'p',
          {
            style: {
              fontSize: '12px',
              userSelect: 'all',
            },
          },
          item,
        ),
      );
    }),
  );
}
