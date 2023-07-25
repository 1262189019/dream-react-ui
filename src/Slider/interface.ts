export interface SliderProps {
    // 要想文档中有 api 必须这么写注释.

     /**
     * @description 初始值
     * @default 0
     */
     defaultValue?: number;
    /**
     * @description 最小值
     * @default 0
     */
    min?: number;
    /**
     * @description 最大值  
     * @default 100
     */
    max?: number;
    /**
     * @description 步长
     * @default 1
     */
    step?: number;
    /**
     * @description 是否禁用状态，默认为 false
     * @default false
     */
    disabled?: boolean;
    /**
     * @description 是否显示输入框，仅在非范围选择时有效
     * @default false
     */
    showInput?:Boolean;
    /**
     * @description 最大长度
     */
    maxLength?: number;

        /**
     * @description 	输入框的尺寸
     *  @default small
     */
    inputSize?:"large"| "medium" | "small" | "mini"


        /**
     * @description 	是否为范围选择
     *  @default false
     */
    range	?:Boolean

      /**
     * @description 	是否为竖向模式  
     *  @default false
     */
      vertical?:Boolean

     /**
     * @description 	Slider 高度，竖向模式时必填  
     */
     height?:string

        /**
     * @description 	屏幕阅读器标签	
     */
        label?:string
  }
  export interface SliderStyle {
   
  
  }
  export type NativeInputProps = Omit<React.InputHTMLAttributes<HTMLElement>, 'type'>; //原生input接口