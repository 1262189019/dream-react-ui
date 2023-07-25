export interface InputProps {
  // 要想文档中有 api 必须这么写注释.
  /**
   * @description 是否有边框
   * @default true
   */
  bordered?: boolean;
  /**
   * @description 语义化结构 class
   */
  classNames?: string;
  /**
   * @description 输入框默认内容
   */
  defaultValue?: string;
  /**
   * @description 是否禁用状态，默认为 false
   * @default false
   */
  disabled?: Boolean;
  /**
   * @description 输入框的 id
   */
  id?: string;
  /**
   * @description 最大长度
   */
  maxLength?: number;
  /**
   * @description 语义化结构 style
   * @default false
   */
  styles?: String;
  /**
   * @description 控件大小。注：标准表单内的输入框大小限制为 middle
   */
  size?: any;
  /**
   * @description 声明 input 类型，同原生 input 标签的 type 属性，见：MDN(请直接使用 Input.TextArea 代替 type="textarea")
   */
  type?: string;

  /**
   * @description 输入框内容
   */
  value?: string;

      /**
   * @description 设定文本域宽高
   */
      rows?: number;
    /**
   * @description 输入时是否有边框
   */
    inputBotton?: string;

      /**
   * @description 输入框时边框颜色
   */
    inputColor?: string;

   /**
   * @description 状态
   */
   status?: 'error' | 'warning' | undefined;
  /**
   * @description 输入框内容变化时的回调
   */
  onChange?: Function;

  /**
   * @description 按下回车的回调
   */
  onPressEnter?: Function;
}
export interface InputStyle {
  //input样式接口
  classNames?: String;
  defaultValue?: String;
  value?: String;
  type?: String;
  size?: String;
}
export type NativeInputProps = Omit<React.InputHTMLAttributes<HTMLElement>, 'type'>; //原生input接口
