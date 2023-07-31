import React, { memo, useEffect, useRef } from 'react';
import Css from './NavMenu.module.less';
import Icon from '../Icon';
var NavMenu = /*#__PURE__*/ memo(function (props) {
  var mode = props.mode,
    data = props.data,
    menuWidth = props.menuWidth;
  var lis = useRef();
  mode = mode ? mode : 'vertical';
  useEffect(function () {
    if (mode == 'horizontal') {
      var li = lis.current.children;
      li[0].classList.add(Css['active']);
    }
  });
  function ChangeBGC(index, disable, e) {
    if (e.target.parentNode.parentNode.parentNode.className == Css['Subelement']) {
      if (lis.current) {
        var li = lis.current.children;
        Array.from(li).forEach(function (item) {
          item.classList.remove(Css['active']);
        });
        li[1].classList.add(Css['active']);
      }
    }
    if (e) {
      e.stopPropagation();
    }
    if (mode == 'horizontal') {
      if (lis.current) {
        var _li = lis.current.children;
        if (_li[index] == e.target.parentNode.parentNode || _li[index] == e.target.parentNode) {
          if (!disable) {
            Array.from(_li).forEach(function (item) {
              item.classList.remove(Css['active']);
            });
            _li[index].classList.add(Css['active']);
          }
        }
      }
    }
  }
  var sumHeight = 0;
  function show(e) {
    e.stopPropagation();
    if (mode == 'vertical') {
      if (e.target.nextElementSibling) {
        var ul = e.target.nextElementSibling;
        sumHeight = ul.children.length * 56;
        if (ul.style.height == '') {
          ul.style.height = sumHeight + 'px';
          // ul.style.transition = 'all 3s'
        } else {
          ul.style.height = '';
        }
        if (ul.parentNode.parentNode.className == Css['Subelement']) {
          var ul2 = ul.parentNode.parentNode;
          var height2 = ul2.children.length * 56;
          var height = Number(ul2.style.height.split('px')[0]);
          if (height == height2) {
            ul2.style.height = height + sumHeight + 'px';
          } else {
            ul2.style.height = height - sumHeight + 'px';
          }
        }
      }
    }
  }
  var css = Css['horizontal'];
  if (mode == 'horizontal ') {
    css = Css['horizontal'];
  }
  if (mode == 'vertical') {
    css = Css['vertical'];
  }
  console.log(Css['disable']);

  // 递归调用
  function html(list, className, ref) {
    return /*#__PURE__*/ React.createElement(
      'ul',
      {
        className: className,
        ref: ref,
      },
      list.map(function (item, index) {
        var disable = item.disable ? item.disable : false;
        if (item.children) {
          var _css = Css['Subelement'];
          return /*#__PURE__*/ React.createElement(
            'li',
            {
              onClick: function onClick(e) {
                return show(e);
              },
              className: disable ? Css['disable'] : null,
            },
            /*#__PURE__*/ React.createElement(
              'p',
              null,
              ' ',
              /*#__PURE__*/ React.createElement(
                'span',
                null,
                ' ',
                /*#__PURE__*/ React.createElement(Icon, {
                  name: item.icon,
                }),
              ),
              /*#__PURE__*/ React.createElement('span', null, item.title),
            ),
            html(item.children, _css),
          );
        } else {
          return /*#__PURE__*/ React.createElement(
            'li',
            {
              onClick: function onClick(e) {
                return ChangeBGC(index, disable, e);
              },
              className: disable ? Css['disable'] : null,
            },
            /*#__PURE__*/ React.createElement(
              'p',
              null,
              ' ',
              /*#__PURE__*/ React.createElement(
                'span',
                null,
                /*#__PURE__*/ React.createElement(Icon, {
                  name: item.icon,
                }),
              ),
              /*#__PURE__*/ React.createElement('span', null, item.title),
            ),
          );
        }
      }),
    );
  }
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: Css['NavMenu'],
      style: {
        width: menuWidth ? menuWidth : null,
      },
    },
    html(data, css, lis),
  );
});
export default NavMenu;
