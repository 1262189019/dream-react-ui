import React from 'react';
import Icon from '../index';
import icons from '../../util/iconPathCompatible';
export default function IconDemo1() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      {icons.map((item: any, index: any) => {
        return (
          <div
            style={{
              padding: '20px 0',
              textAlign: 'center',
              width: '18%',
              backgroundColor: '#e5e7eb',
              marginBottom: '10px',
            }}
          >
            <Icon key={index} name={item} />
            <p style={{ fontSize: '12px', userSelect: 'all' }}>{item}</p>
          </div>
        );
      })}
    </div>
  );
}
