import React, { useMemo, FC, memo } from 'react';
import './Button.module.less';
import { ButtonProps, ButtonStyle, NativeButtonProps } from './interface';

const Button: FC<ButtonProps & NativeButtonProps> = memo((props) => {
  const { type, width, height, disabled, circle, dashed, loading, handleClick, children } = props;

  const buttonStyle = useMemo(() => {
    if (!type && type !== 'danger' && type !== 'warning' && type !== 'warning' && type !== 'text') {
      return 'primary';
    }
    return type as any;
  }, [type]);
  const buttonSize = useMemo(() => {
    var size: ButtonStyle = {
      width: '100px',
      height: '40px',
    };
    if (width) {
      size.width = width + 'px';
    }
    if (height) {
      size.height = height + 'px';
    }
    if (circle) {
      size = { ...size, borderRadius: '50%' };
    }
    if (dashed && type === 'text') {
      size = { ...size, border: '1px dashed #ccc' };
    }
    if (disabled) {
      size = { ...size, cursor: 'not-allowed' };
    }
    return size;
  }, [width, height, circle, dashed]);
  return (
    <div className="button">
      <button
        className={buttonStyle}
        style={buttonSize as any}
        disabled={disabled ? true : false}
        onClick={handleClick as undefined}
      >
        {loading && <div className="loading1" />}
        {children}
      </button>
    </div>
  );
});

export default Button;
