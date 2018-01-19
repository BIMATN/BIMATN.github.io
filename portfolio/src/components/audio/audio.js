import React, {Component} from 'react';
import './audio.css';

class Audio extends Component {
    constructor (props) {
        super(props);
        this.state = {
            audio: <p id="speaker">&#128266;</p>,
            status: true
        }
    }

    clickHandler = (e) => {
        e.preventDefault();
        const audio = document.getElementById("audio");
        if(this.state.status){
            this.setState ({
                audio: <p id="speaker">&#128263;</p>,
                status: false
            })
            audio.muted = true;
        }
        else{
            this.setState ({
                audio: <p id="speaker">&#128266;</p>,
                status: true
            })
            audio.muted = false;
        }
    }

    render (props) {
        return (
            <div className="right">
                <audio id="audio" autoPlay="autoplay" loop="loop">
                    <source src={this.props.src} type="audio/mpeg"></source>
                    Your browser does not support the audio tag.
                </audio>
                <a href="#audio" onClick={this.clickHandler}>{this.state.audio}</a>
            </div>
        )
    }
}

export default Audio;