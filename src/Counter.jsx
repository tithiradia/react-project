import React from "react";
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 1 };
    }
    incrementData() {
        if(this.state.Counter > 3) {
            this.setState({ msg: "Counter is greater than 3" })
        } else {
            this.setState({ counter: this.state.counter + 1 })
        }
    }
    decrementData() {
        if(this.state.counter < 1) {
            this.setState({ msg: "Counter is less than 1" })
        } else {
            this.setState({ counter: this.state.counter - 1 })
        }
    }
    render() { 
        var a=10
        return ( 
            <>
                <h1>Counter App</h1>
                A value is {a}
                <p>Counter value is {this.state.counter}</p>
                <button onClick={() => this.incrementData()}>Increment</button>
                <button onClick={() => this.decrementData()}>Decrement</button>
                {this.state.msg && <p>{this.state.msg}</p>}
                <p>Value of a: {a}</p>
            </>
        );
    }
}
 
export default Counter;