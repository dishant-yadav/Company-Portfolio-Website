import AnimatedNumber from "animated-number-react";
import { Component } from "react";
export default class App extends Component {

    state = {
        value: 0,
    };
    handleChange = ({ target: { value } }) => {
        this.setState({ value });
    };
    formatValue = (value) => value.toFixed(0);
    render() {
        return (
            <div>
                <AnimatedNumber
                    value={this.props.value}
                    duration={1500}
                    delay={100}
                    formatValue={this.formatValue}
                />
            </div>
        );
    }
}