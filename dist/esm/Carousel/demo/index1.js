import React from 'react';
import Carousel from '../Carousel';
import CarouselItem from '../CarouselItem';
export default function index1() {
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(
      Carousel,
      {
        loop: true,
      },
      [1, 2, 3, 4].map(function (item) {
        if (item % 2 === 0) {
          return /*#__PURE__*/ React.createElement(
            CarouselItem,
            null,
            /*#__PURE__*/ React.createElement(
              'h1',
              {
                style: {
                  backgroundColor: '#d3dce6',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0',
                },
              },
              item,
            ),
          );
        } else {
          return /*#__PURE__*/ React.createElement(
            CarouselItem,
            null,
            /*#__PURE__*/ React.createElement(
              'h1',
              {
                style: {
                  backgroundColor: '#99a9bf',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0',
                },
              },
              item,
            ),
          );
        }
      }),
    ),
  );
}
