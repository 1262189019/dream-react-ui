// import React, { useMemo, FC, memo } from 'react';
// import './Font.module.less';
// import { FontProps, FontStyle, NativeFontProps } from './interface';


// const Font: FC<FontProps & NativeFontProps> = memo((props) => {
//     const { type, fontSize, fontFamily, color,fontWeight } = props;

//     const fontStyle = useMemo(() => {
//       if (!type && type !== '宋体' && type !== '楷体' && type !== '小篆' && type !== 'Helvetica Neue' && type !== 'Helvetica' && type !== 'Arial') {
//         return '宋体';
//       }
//       return type as any;
//     }, [type]);
     
//     const fSize = useMemo(() => {
//       var size: FontStyle = {
//         fontSize: '20px',
//         fontWeight: '700',
//       };
//       if (fontSize) {
//         size.fontSize = fontSize + 'px';
//       }
//       if (fontWeight) {
//         size.fontWeight = fontWeight;
//       }
//       if (color) {
//         size = { ...size, color }; 
//     }
//       if (fontFamily) {
//         size = { ...size, fontFamily };
//       }
//       return size;
//     }, [fontSize, fontWeight, color, fontFamily]);
//     return  <div className="Font">
//     <h1
//       className={fontStyle}
//       style={fSize as any}
//     >
//       {/* {loading && <div className="loading1" />}
//       {children} */}
//     </h1>
//   </div>
// });


// export default Font





import React, { useMemo, FC, memo } from 'react';
import './Font.module.less';

interface FontProps {
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  fontWeight?: string;
  variant?: 'songti' | 'kaiti' | 'heiti' | 'Helvetica Neue' | 'Helvetica' | 'Arial';
}

interface NativeFontProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const Font: FC<FontProps & NativeFontProps> = memo((props) => {
  const { variant, fontSize, fontFamily, color, fontWeight, ...restProps } = props;

  const fontStyle = useMemo(() => {
    if (!variant && variant !== 'songti' && variant !== 'kaiti' && variant !== 'heiti' && variant !== 'Helvetica Neue' && variant !== 'Helvetica' && variant !== 'Arial') {
      return 'heiti';
    }
    return variant as any;
  }, [variant]);

  const fSize = useMemo(() => {
    var size: React.CSSProperties = {
      fontSize: '20px',
      fontWeight: '400',
    };
    if (fontSize) {
      size.fontSize = fontSize + 'px';
    }
    if (fontWeight) {
      size.fontWeight = fontWeight;
    }
    if (color) {
      size = { ...size, color };
    }
    return size;
  }, [fontSize, fontWeight, color, fontFamily]);

  return (
    <div className="Font">
      <p className={fontStyle} style={fSize} {...restProps} />
    </div>
  );
});

export default Font;