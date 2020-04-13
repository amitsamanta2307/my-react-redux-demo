import React, { Component } from 'react';
import { connect } from 'react-redux';

import { decrement, increment } from './actions';

const mapStateToProps = (storeData) => ({
    counter: storeData.counter
});

const mapDispatchToProps = {
    handleDecrement: decrement,
    handleIncrement: increment
}

class Counter extends Component {

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button className="btn btn-warning" 
                        onClick={ () => this.props.handleDecrement() }>-</button>
                    <span>{this.props.counter}</span>
                    <button className="btn btn-success" 
                        onClick={ () => this.props.handleIncrement() }>+</button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);