import React, { memo, useMemo } from 'react';
import Css from './index.module.less';
var BwNotification = /*#__PURE__*/ memo(function (props) {
  var info = props.info,
    message = props.message,
    icon = props.icon,
    requireInteraction = props.requireInteraction,
    children = props.children;
  var newIcon = icon;
  var newRequireInteraction = requireInteraction;
  var newMessage = useMemo(
    function () {
      if (!message) {
        message = '这里是一个消息提示';
        return message;
      }
      return message;
    },
    [message],
  );
  var newTitle = useMemo(
    function () {
      if (!info) {
        info = '标题';
        return info;
      }
      return info;
    },
    [info],
  );
  var notify = function notify() {
    if (!('Notification' in window)) {
      alert('如果您的浏览器不支持跳转，请点击此处！');
    } else if (Notification.permission === 'granted') {
      var notification = new Notification(newTitle, {
        body: newMessage,
        icon: newIcon,
        requireInteraction: newRequireInteraction,
      });
    } else if (Notification.permission !== 'denied') {
      //用于取得用户同意
      //“granted”（状态值：0）表示用户同意消息提醒；
      // “default”（状态值：1）表示默认状态，用户既未拒绝，也未同意；
      //“denied”（状态值：1）表示用户拒绝消息提醒。
      //只有在状态值为0的时候才能够允许消息提醒
      Notification.requestPermission().then(function (permission) {
        if (permission === 'granted') {
          var _notification = new Notification('测试消息弹出');
        }
      });
    }
  };
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: Css['notification'],
      onClick: notify,
    },
    children ? children : '显示通知',
  );
});
export default BwNotification;
