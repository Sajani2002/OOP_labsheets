import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.timer = null;
    }

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    startTimer() {
        this.timer = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count + 1
            }));
        }, 1000);
    }

    stopTimer = () => {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <h2>Counter: {this.state.count}</h2>
                <button onClick={this.stopTimer}>Stop</button>
            </div>
        );
    }
}

export default Counter;
