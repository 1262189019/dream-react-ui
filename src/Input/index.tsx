import React, { FC, useMemo, memo } from 'react';
import { InputProps, NativeInputProps, InputStyle } from './interface';
import './Input.module.less';

const Input: FC<InputProps & NativeInputProps> = memo((props) => {
  const {
    type,
    size,
    disabled,
    placeholder,
    value,
    onChange,
    status,
    inputBotton,
    inputColor,
    rows,
  } = props;

  const inputType = useMemo(() => {
    if (!type && type !== 'sumbit') {
      return 'text';
    }
    return type as any;
  }, [type]);

  const style = useMemo(() => getSizeStyle(size, status), [size, status]);

  return (
    <div className="input">
      <span>{props.children}</span>
      {inputType === 'textarea' ? (
        <textarea
          className={disabled ? 'disabled' : 'input-react'}
          style={style}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          rows={rows}
        />
      ) : (
        <input
          className={disabled ? 'disabled' : 'input-react'}
          style={style}
          type={inputType as any}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      )}
    </div>
  );
});

const getSizeStyle = (size: string | undefined, status: string | undefined) => {
  const sizes: Record<string, string> = {
    small: '150px',
    medium: '200px',
    large: '250px',
  };

  const statuses: Record<string, string> = {
    error: 'red',
    warning: 'yellow',
  };

  const defaultSize = sizes.medium;
  const defaultColor = 'white'; // 默认背景颜色

  // 根据状态设置背景颜色
  const backgroundColor = status ? statuses[status] || defaultColor : defaultColor;
  const widthsize = size ? sizes[size] || defaultSize : defaultSize;
  return {
    width: widthsize,
    backgroundColor: backgroundColor,
  };
};

export default Input;
