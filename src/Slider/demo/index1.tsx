import React from 'react';
import Slider from '../index';



export default function SliderDemo1() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
         <span>默认值</span><Slider></Slider>
         <br />
        <span>自定义初始值</span> <Slider defaultValue={50}>
         </Slider>
        <span>禁用</span><Slider disabled></Slider>
      </div>
    );
  }
  