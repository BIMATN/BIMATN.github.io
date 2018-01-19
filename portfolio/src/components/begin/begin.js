import React, {Component} from 'react';
import './begin.css';

class Begin extends Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }
    render (props) {
        return (
            <div className="center">
                <div className="center-item">
                    <a id="begin" href="#begin"><p>{this.props.text}</p></a>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default Begin;