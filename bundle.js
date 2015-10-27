require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-analog-clock":[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var ReactAnalogClock = _react2['default'].createClass({
  displayName: 'ReactAnalogClock',

  getDefaultProps: function getDefaultProps() {
    return {
      tz: 'America/Vancouver'
    };
  },
  getInitialState: function getInitialState() {
    return this.extractMomentInfo((0, _momentTimezone2['default'])().tz(this.props.tz));
  },
  componentDidMount: function componentDidMount() {
    setTimeout((function () {
      this.interval = setInterval(this.tick, 1000);
    }).bind(this), this.state.milliseconds);
  },
  componentWillUnmount: function componentWillUnmount() {
    clearInterval(this.interval);
  },
  extractMomentInfo: function extractMomentInfo(time) {
    return {
      milliseconds: time.milliseconds(),
      seconds: time.seconds(),
      minutes: time.minutes(),
      hours: time.hours()
    };
  },
  setTimeInfo: function setTimeInfo(time) {
    this.setState(this.extractMomentInfo(time));
  },
  tick: function tick() {
    this.setTimeInfo((0, _momentTimezone2['default'])().tz(this.props.tz));
  },
  rotateSeconds: function rotateSeconds() {
    return 'rotate(' + this.state.seconds * 6 + ', 50, 50)';
  },
  rotateMinutes: function rotateMinutes() {
    return 'rotate(' + this.state.minutes * 6 + ', 50, 50)';
  },
  rotateHours: function rotateHours() {
    return 'rotate(' + this.state.hours * 30 + ', 50, 50)';
  },
  render: function render() {
    return _react2['default'].createElement(
      'div',
      { className: 'analog-clock' },
      _react2['default'].createElement(
        'svg',
        { id: 'clock', viewBox: '0 0 100 100' },
        _react2['default'].createElement('circle', { id: 'face', cx: '50', cy: '50', r: '48' }),
        _react2['default'].createElement(
          'g',
          { id: 'hands' },
          _react2['default'].createElement('rect', { id: 'hour', x: '48.5', y: '17.5', width: '5', height: '35', rx: '2.5', ry: '2.55', transform: this.rotateHours() }),
          _react2['default'].createElement('rect', { id: 'min', x: '48', y: '12.5', width: '3', height: '40', rx: '2', ry: '2', transform: this.rotateMinutes() }),
          _react2['default'].createElement('line', { id: 'sec', x1: '50', y1: '50', x2: '50', y2: '16', transform: this.rotateSeconds() })
        ),
        _react2['default'].createElement(
          'g',
          { id: 'ticks' },
          _react2['default'].createElement('rect', null),
          _react2['default'].createElement('rect', null),
          _react2['default'].createElement('rect', null),
          _react2['default'].createElement('rect', null),
          _react2['default'].createElement('rect', null),
          _react2['default'].createElement('rect', null),
          _react2['default'].createElement('rect', null),
          _react2['default'].createElement('rect', null),
          _react2['default'].createElement('rect', null),
          _react2['default'].createElement('rect', null),
          _react2['default'].createElement('rect', null),
          _react2['default'].createElement('rect', null)
        )
      )
    );
  }
});

module.exports = ReactAnalogClock;

},{"moment-timezone":undefined,"react":undefined}]},{},[]);
