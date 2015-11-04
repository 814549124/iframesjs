一个小小的方案
高兼容的,解耦式的让父窗口和子窗口来回的传递消息
有两个测试案例


教程
=====
在主页面
------
```html
<iframe src='xxx.html' name='iframe_name' id='iframe_name' />
```

```javascript
messages.on('message_name',function(data){
  //receive data from any iframes
  //.....do something
  
  var sende_data = {
    'text':'nice to meet you to'
  };
  messages.down('iframe_name','replay_message_name',send_data);
});
```


在子iframe里
------
```javascript
messages.on('replay_message_name',function(data){
  //receive data from replyed container window or other replyed child iframes
  //.....do something
});
var sender_data = {
  'text':'nice to meet you'
};
messages.up('message_name',sender_data);
```

