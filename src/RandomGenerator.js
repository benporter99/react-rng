import React from 'react';

class RandomGenerator extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.clickCount !== nextProps.clickCount) {
            return true;
        }
        return false;
    };

    render() {
        const min = Number(this.props.minMax[0]);
        const max = Number(this.props.minMax[1]);

        if (min >= max) {
            return (
                <div>
                    <h1>Min is {min === max ? "equal to" : "larger than"} max - cannot calculate random number with these boundaries.</h1>
                </div>
            )
        } else {

            const randomNum = Math.floor((Math.random() * (max - min + 1)) + min)

            return (
                <div>
                    <h1>The random number between {min} and {max} is: {randomNum}</h1>
                </div>
            );
        }
    }
}

export default RandomGenerator;