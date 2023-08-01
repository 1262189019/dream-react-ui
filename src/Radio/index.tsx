import React, { useMemo, FC, memo, useEffect, useState, useRef } from 'react';
import Css from './Radio.module.less';
import { RadioProps, NativeRadioProps } from './interface';

const Radio: FC<RadioProps & NativeRadioProps> = memo((props) => {
  let { value, defaultValue, label, disabled, border, size, onchange } = props;

  console.log(defaultValue);

  useEffect(() => {
    let input = document.getElementsByTagName('input');

    Array.from(input).forEach((item) => {
      if (defaultValue == item.id) {
        ChangeColor(item);
      }
    });
  }, []);

  let radioStyle = {
    border: '1px solid #ccc',
  };

  // size,border
  disabled = disabled ? disabled : false;
  size = size ? size : '';
  border = border ? border : false;

  function radioChange(e: any) {
    ChangeColor(e.target);
    return onchange ? onchange() : null;
  }

  function ChangeColor(el: any) {
    let labels = document.getElementsByTagName('label');
    Array.from(labels).forEach((item: any) => {
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

  return (
    <div className={Css['radio']}>
      <div className={Css[size as any]} style={border ? radioStyle : {}}>
        <input
          type="radio"
          name={value}
          id={label}
          disabled={disabled}
          onClick={(e: any) => radioChange(e)}
        />
        <label htmlFor={label} style={{ color: disabled ? '#ccc' : '#000' }}>
          {props.children}
        </label>
      </div>
    </div>
  );
});

export default Radio;
