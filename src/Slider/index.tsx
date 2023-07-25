import React, { FC, useMemo, memo } from 'react';
import {SliderProps,SliderStyle,NativeInputProps  } from './interface';


const Slider: FC<SliderProps & NativeInputProps> = memo((props) => {
  const { min, max, step, disabled, showInput, maxLength, inputSize,range,vertical,height,label,defaultValue } = props;

  const  intValue = useMemo(() => {
    if (!defaultValue) {
      return 0;
    }
    return defaultValue as any;
  }, [defaultValue]);
  


  return (
    <div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      showInput={showInput}
      maxLength={maxLength}
      inputSize={inputSize} 
      range={range}
      vertical ={vertical}
      height={height}
      label={label}
      defaultValue={intValue}
    />
 
  </div>
  );
});
  
  export default Slider;