export interface CollapseProps {
  /**
   * @description 自定义符号
   * @default
   */
  separator?: String;
  /**
   * @description 路由选项
   * @default
   */
  routes?: any;
  /**
   * @description 自定义链接
   * @default
   */
  items?: any;
}
export interface CollapseStyle {}
export type NativeButtonProps = Omit<React.AllHTMLAttributes<HTMLElement>, 'type'>;
