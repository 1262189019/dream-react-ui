import React, { memo, useEffect } from 'react';
import Css from './index.module.less';
var RadioGroupButton = /*#__PURE__*/ memo(function (props) {
  var value = props.value,
    defaultValue = props.defaultValue,
    label = props.label,
    disabled = props.disabled,
    size = props.size,
    onchange = props.onchange;
  useEffect(function () {
    var input = document.getElementsByTagName('input');
    Array.from(input).forEach(function (item) {
      if (defaultValue == item.id) {
        ChangeColor(item);
      }
    });
  }, []);
  size = size ? size : 'medium';
  disabled = disabled ? disabled : false;
  function radioChange(e) {
    if (e.target.nodeName === 'INPUT') {
      ChangeColor(e.target);
      return onchange ? onchange() : null;
    }
  }
  function ChangeColor(el) {
    var labels = document.getElementsByTagName('label');
    Array.from(labels).forEach(function (item) {
      if (item.previousElementSibling.name == value) {
        if (item == el.nextSibling) {
          item.style.color = 'white';
          item.parentElement.style.border = '1px solid blue';
          item.parentElement.style.backgroundColor = 'blue';
        } else {
          if (item.previousElementSibling.disabled) {
            item.style.color = '#ccc';
          } else {
            item.style.color = '#000';
          }
          item.parentElement.style.border = '1px solid #ccc';
          item.parentElement.style.backgroundColor = 'transparent';
        }
      }
    });
  }
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: Css['radioGroupButton'],
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: Css[size],
        onClick: function onClick(e) {
          return radioChange(e);
        },
      },
      /*#__PURE__*/ React.createElement('input', {
        type: 'radio',
        name: value,
        id: label,
        disabled: disabled,
        style: {
          display: 'none',
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
        label,
      ),
    ),
  );
});
export default RadioGroupButton;
