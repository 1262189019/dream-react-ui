import React, { FC, memo } from 'react';
import './Breadcrumb.module.less';
import { CollapseProps } from './interface';

const Button: FC<CollapseProps> = memo(({ items, separator, routes }) => {
  return (
    <div className="Breadcrumb">
      {items
        ? items.map((item: any) => {
            return (
              <div className="nav">
                {item.title} <span className="nav_one">{separator ? separator : '/'}</span>{' '}
              </div>
            );
          })
        : routes.map((item: any) => {
            return (
              <div className="nav">
                <a href={item.path}>{item.breadcrumbName}</a>{' '}
                <span className="nav_one">{separator ? separator : '/'}</span>
              </div>
            );
          })}
    </div>
  );
});

export default Button;
