import React from 'react';
import Tab from '..';
export default function TabDemo() {
  let list = [
    { id: 1, type: 'Tab1', content: '标签1' },
    { id: 2, type: 'Tab2', content: '标签2' },
    { id: 3, type: 'Tab3', content: '标签3' },
    { id: 4, type: 'Tab4', content: '标签4' },
    { id: 5, type: 'Tab1', content: '标签5' },
  ];
  return (
    <div>
      <Tab tags={list}></Tab>
    </div>
  );
}
