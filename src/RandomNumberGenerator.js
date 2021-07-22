import React from 'react';
import RandomGenerator from './RandomGenerator';

class RandomNumberGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userMinInput: '0',
            userMaxInput: '10',
            userMinSubmit: '0',
            userMaxSubmit: '10',
            clickCount: 0,
        }
        this.handleMinChange = this.handleMinChange.bind(this);
        this.handleMaxChange = this.handleMaxChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    handleMinChange(event) {
        this.setState({
            userMinInput: event.target.value
        });
    }

    handleMaxChange(event) {
        this.setState({
            userMaxInput: event.target.value
        });
    }

    handleBtnClick() {
        this.setState({
            userMinSubmit: this.state.userMinInput,
            userMaxSubmit: this.state.userMaxInput,
            clickCount: this.state.clickCount + 1
        })
    }

    render() {
        return (
            <div>
                <h1>Random Number Generator</h1>
                <h2>Type lower and upper ranges to change the bounds for random number generation.</h2>
                <input type="number" placeholder="Min: default is 0" value={this.userMinInput} onChange={this.handleMinChange}></input>
                <input type="number" placeholder="Max: default is 10" value={this.userMaxInput} onChange={this.handleMaxChange}></input>
                <button type="submit" onClick={this.handleBtnClick}>Generate Random Number</button>
                <RandomGenerator minMax={[this.state.userMinSubmit, this.state.userMaxSubmit]} clickCount={this.state.clickCount}/>
            </div>
        );
    };
};

export default RandomNumberGenerator;