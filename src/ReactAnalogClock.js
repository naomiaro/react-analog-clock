import React from 'react';
import moment from 'moment-timezone';

var ReactAnalogClock = React.createClass({
  getDefaultProps: function(){
    return {
      tz: 'America/Vancouver'
    };
  },
  getInitialState: function() {
    return this.extractMomentInfo(moment().tz(this.props.tz));
  },
  componentDidMount: function() {
    setTimeout(function() {
      this.interval = setInterval(this.tick, 1000);
    }.bind(this), this.state.milliseconds);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  extractMomentInfo: function(time) {
    return {
      milliseconds: time.milliseconds(),
      seconds: time.seconds(),
      minutes: time.minutes(),
      hours: time.hours()
    };
  },
  setTimeInfo: function(time) {
    this.setState(this.extractMomentInfo(time));
  },
  tick: function() {
    this.setTimeInfo(moment().tz(this.props.tz));
  },
  rotateSeconds: function() {
    return 'rotate(' + this.state.seconds * 6 + ', 50, 50)';
  },
  rotateMinutes: function() {
    return 'rotate(' + this.state.minutes * 6 + ', 50, 50)';
  },
  rotateHours: function() {
    return 'rotate(' + this.state.hours * 30 + ', 50, 50)';
  },
  render: function() {
    return ( <div className="analog-clock">
      <svg id="clock" viewBox="0 0 100 100">
        <circle id="face" cx="50" cy="50" r="48"/>
        <g id="hands">
          <rect id="hour" x="48.5" y="17.5" width="5" height="35" rx="2.5" ry="2.55" transform={this.rotateHours()} />
          <rect id="min" x="48" y="12.5" width="3" height="40" rx="2" ry="2" transform={this.rotateMinutes()} />
          <line id="sec" x1="50" y1="50" x2="50" y2="16" transform={this.rotateSeconds()} />
        </g>
        <g id="ticks">
          <rect />
          <rect />
          <rect />
          <rect />
          <rect />
          <rect />
          <rect />
          <rect />
          <rect />
          <rect />
          <rect />
          <rect />
        </g>
      </svg>
    </div>
    );
  }
});

module.exports = ReactAnalogClock;
