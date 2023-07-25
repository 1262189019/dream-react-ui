export interface FontProps {
  /**
   * @description 字体类型
   * @default "宋体"
   */
  type?: string;
  /**
   * @description 字号大小
   */
  fontSize?: number;
  /**
   * @description 字体家族
   */
  fontFamily?: string;
  /**
   * @description 字体颜色
   */
  color?: string;
  /**
   * @description 字体颜色
   */
  fontWeight?: string;
}

export interface FontStyle {
  /**
   * @description 字号大小
   */
  fontSize?: string;
  /**
   * @description 字体家族
   */
  fontFamily?: string;
  /**
   * @description 字体粗细
   */
  fontWeight?: string;
  /**
   * @description 字体样式
   */
  fontStyle?: string;
  color?:string
}
export type NativeFontProps = FontProps & Omit<React.HTMLAttributes<HTMLElement>, 'variant'>;