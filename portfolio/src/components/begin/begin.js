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
                    <a id="begin" href="/"><h2>{this.props.text}</h2></a>
                </div>
            </div>
        )
    }
}

export default Begin;