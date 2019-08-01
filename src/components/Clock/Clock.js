import React, { Component } from 'react';
import './styles.css';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    var date = this.getTimeString();
    this.state = {
      time: date
    }
  }
  getTimeString() {
    const date = new Date(Date.now()).toLocaleTimeString();
    return date;
  }
  componentDidMount() {
    const _this = this;
    this.timer = setInterval(function () {
      var date = _this.getTimeString();
      _this.setState({
        time: date
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <>
        <p className="clock">{this.state.time} the clocks ticking</p>
      </>
    );
  }
}