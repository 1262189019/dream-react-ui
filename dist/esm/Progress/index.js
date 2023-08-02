import React, { memo, useMemo } from 'react';
import css from './Progress.module.less';
var Progress = /*#__PURE__*/ memo(function (props) {
  var percent = props.percent,
    strokeColor = props.strokeColor,
    status = props.status,
    showInfo = props.showInfo;
  var statusStyle = useMemo(
    function () {
      var size = {
        width: '0',
        backgroundColor: '#ffc107',
        num: '0%',
      };
      if (percent) {
        (size.width = percent + '%'), (size.num = percent + '%');
      }
      if (percent === 100 && status && status === 'success') {
        size = {
          width: percent + '%',
          backgroundColor: '#4caf50',
          num: percent + '%',
        };
      }
      if (percent && status && status === 'fail') {
        size = {
          width: percent + '%',
          backgroundColor: '#f44336',
          num: percent + '%',
        };
      }
      if (percent && status && status === 'active') {
        size = {
          width: percent + '%',
          backgroundColor: '#3498ff',
          num: percent + '%',
        };
      }
      if (strokeColor) {
        size.backgroundColor = strokeColor;
      }
      if (showInfo === false) {
        size.num = '';
      }
      return size;
    },
    [status, percent],
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: css['line'],
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: css['line_outer'],
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: css.line_inner,
        },
        /*#__PURE__*/ React.createElement('div', {
          className: status === 'active' ? css['line_bg_show'] : css['line_bg'],
          style: statusStyle,
        }),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: css['line_info'],
      },
      /*#__PURE__*/ React.createElement(
        'span',
        {
          className: css['line_info_status'],
        },
        statusStyle.num,
      ),
    ),
  );
});
export default Progress;
