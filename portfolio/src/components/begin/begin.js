import React, {Component} from 'react';
import './begin.css';
import PortBody from '../portBody/portBody';

class Begin extends Component {
    constructor (props) {
        super(props);
        this.state = {
            titleHidden: "",
            portBodyHidden: "hidden"
        }
    }

    clickHandler = (e) => {
        e.preventDefault();
        this.setState({
            titleHidden: "hidden",
            portBodyHidden: ""
        })
    }

    render (props) {
        return (
            <div>
                <div className="center">
                    <div className="center-item" hidden={this.state.titleHidden}>
                        <a id="begin" href="#begin" onClick={this.clickHandler}><p>{this.props.text}</p></a>
                    </div>
                    <div hidden={this.state.titleHidden}>
                        {this.props.children}
                    </div>
                    <div id="portBodyContainer" hidden={this.state.portBodyHidden}>
                        <PortBody/>
                    </div>
                </div>
            </div>
        )   
    }
}

export default Begin;