import React, { FC, memo } from 'react';
import { IconProps } from './interface';
import Css from './index.module.less';
import './icons';

const Icon: FC<IconProps> = ({ name, size, color, className }) => {
  let style = {
    width: '16px',
    height: '16px',
    filter: color ? 'brightness(0) invert(1)' : '',
  };

  if (size) {
    if (typeof size === 'string') {
      if (size.includes('%') || size.includes('px')) {
        style.width = size;
        style.height = size;
      }
    } else if (size * 1) {
      style.width = size + 'px';
      style.height = size + 'px';
    }
  }

  return (
    <>
      <svg className={[Css['icon'], className].join(' ')} aria-hidden="true" style={style}>
        <use xlinkHref={'#icon-' + name}></use>
      </svg>
    </>
  );
};

export default Icon;
