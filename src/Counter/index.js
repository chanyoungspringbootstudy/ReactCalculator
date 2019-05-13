import React, {Component} from 'react';

import './counter.scss'
import Input from './input.js'

class Counter extends Component {
    state = {
        result: 0,
        input1: 1,
        input2: 2
    };

    render() {
        let {input1,input2} = this.state;
        return (
            <div className='counter-style'>
                <Input value={input1} handleChange={(e) => this.handleChange111(e, "input1")}/>
                <Input value={input2} handleChange={(e) => this.handleChange111(e, "input2")}/>
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>
                <button onClick={this.handleMulti}>x</button>
                <button onClick={this.handleDiv}>÷</button>
                <div>{this.state.result}</div>
            </div>
        );
    }

    handleChange111(event, type) {
        this.setState({
            [type]: parseInt(event.target.value)
        })
    }

    // handleChange = event => this.setState({
    //     delta: parseInt(event.target.value)
    // });
    handlePlus = () => this.setState({
        result: this.state.input1 + this.state.input2
    });
    handleMinus = () => this.setState({
        result: this.state.input1 - this.state.input2
    });
    handleMulti = () => this.setState({
        result: this.state.input1 * this.state.input2
    });
    handleDiv = () => this.setState({
        result: this.state.input1 / this.state.input2
    });

}

export default Counter;