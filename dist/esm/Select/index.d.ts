import React from 'react';
import './Select.module.less';
interface Option {
  value: string;
  label: string;
}
interface SelectProps {
  /**
   * @description 选项
   */
  options: Option[];
  onChange: (value: string) => void;
  /**
   * @description 是否禁用状态
   * @default false
   */
  disabled?: Boolean;
}
declare const Select: React.FC<SelectProps>;
export default Select;
