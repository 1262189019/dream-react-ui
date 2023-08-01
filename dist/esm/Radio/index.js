import React, { memo, useEffect } from 'react';
import Css from './Radio.module.less';
var Radio = /*#__PURE__*/ memo(function (props) {
  var value = props.value,
    defaultValue = props.defaultValue,
    label = props.label,
    disabled = props.disabled,
    border = props.border,
    size = props.size,
    onchange = props.onchange;
  console.log(defaultValue);
  useEffect(function () {
    var input = document.getElementsByTagName('input');
    Array.from(input).forEach(function (item) {
      if (defaultValue == item.id) {
        ChangeColor(item);
      }
    });
  }, []);
  var radioStyle = {
    border: '1px solid #ccc',
  };

  // size,border
  disabled = disabled ? disabled : false;
  size = size ? size : '';
  border = border ? border : false;
  function radioChange(e) {
    ChangeColor(e.target);
    return onchange ? onchange() : null;
  }
  function ChangeColor(el) {
    var labels = document.getElementsByTagName('label');
    Array.from(labels).forEach(function (item) {
      if (item.previousElementSibling.name == value) {
        if (item == el.nextSibling) {
          item.previousElementSibling.checked = true;
          item.style.color = 'blue';
          if (item.parentElement.style.border != '') {
            item.parentElement.style.border = '1px solid blue';
          }
        } else {
          item.previousElementSibling.checked = false;
          if (item.previousElementSibling.disabled) {
            item.style.color = '#ccc';
          } else {
            item.style.color = '#000';
          }
          if (item.parentElement.style.border != '') {
            item.parentElement.style.border = '1px solid #ccc';
          }
        }
      }
    });
  }
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: Css['radio'],
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: Css[size],
        style: border ? radioStyle : {},
      },
      /*#__PURE__*/ React.createElement('input', {
        type: 'radio',
        name: value,
        id: label,
        disabled: disabled,
        onClick: function onClick(e) {
          return radioChange(e);
        },
      }),
      /*#__PURE__*/ React.createElement(
        'label',
        {
          htmlFor: label,
          style: {
            color: disabled ? '#ccc' : '#000',
          },
        },
        props.children,
      ),
    ),
  );
});
export default Radio;
