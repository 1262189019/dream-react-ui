import React, { FC, useState } from 'react';
import { TabProps } from './interface';
import './Tab.module.less';
import Icon from '../Icon';
const Tab: FC<TabProps> = (props) => {
  const { closable, tags, compile } = props;

  const [tabs, setTabs] = useState(tags ? tags : []);

  const handleClick = (e: any, id: any) => {
    e.target.parentNode.parentNode.classList.add('rotate');
    setTimeout(() => {
      const newTabs = tabs.filter((item: any) => item.id !== id);
      setTabs(newTabs);
    }, 200);
  };

  const [Timer, setTimer] = useState(6);
  const InputChange = (e: any) => {
    if (e.target.value.trim() !== '') {
      let date = new Date();
      setTimer(Number(date));
      const data = {
        id: Timer,
        type: 'Tab1',
        content: `${e.target.value}`,
      };
      tabs.push(data);
      e.target.value = '';
    }
    e.target.classList.remove('action');
  };
  const DownEnter = (e: any) => {
    if (e.key === 'Enter') {
      let date = new Date();
      setTimer(Number(date));
      const data = {
        id: Timer,
        type: 'Tab1',
        content: `${e.target.value}`,
      };
      tabs.push(data);
      e.target.value = '';
    }
  };

  return (
    <div className="TabBox">
      {tabs.map((item: any) => (
        <div key={item.id} className={item.type} style={{ transition: 'all .3s' }}>
          <p style={{ margin: '0 10px' }}>{item.content}</p>
          {closable ? (
            <div
              style={{ margin: '0 10px', fontSize: '15px', cursor: 'pointer' }}
              onClick={(e) => handleClick(e, item.id)}
            >
              {' '}
              <Icon name="closeguanbi" size={12} />{' '}
            </div>
          ) : null}
        </div>
      ))}
      {compile ? (
        <input
          className="inputText"
          type="text"
          onFocus={(e) => {
            e.target.classList.add('action');
          }}
          placeholder="new tab"
          onBlur={(e) => InputChange(e)}
          onKeyDown={(e) => DownEnter(e)}
        />
      ) : null}
    </div>
  );
};

export default Tab;
