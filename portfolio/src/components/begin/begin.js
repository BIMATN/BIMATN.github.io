import React, {Component} from 'react';
import './begin.css';

class Begin extends Component {
    constructor (props) {
        super(props);
        this.state = {
            hidden: ""
        }
    }

    clickHandler = (e) => {
        e.preventDefault();
        this.setState({
            hidden: "hidden"
        })
    }

    render (props) {
        return (
            <div className="center">
                <div className="center-item" hidden={this.state.hidden}>
                    <a id="begin" href="#begin" onClick={this.clickHandler}><p>{this.props.text}</p></a>
                </div>
                <div hidden={this.state.hidden}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Begin;