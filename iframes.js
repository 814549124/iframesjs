// Generated by CoffeeScript 1.10.0
var message;

message = message || (function() {
  var _callback;
  _callback = {};
  return {
    _on: function(message, data) {
      return _callback[message](data);
    },
    on: function(message, func) {
      _callback[message] = func;
      return null;
    },
    up: function(message, data) {
      return parent.message._on(message, data);
    },
    down: function(name, message, data) {
      return frames[name].message._on(message, data);
    }
  };
})();
