import React, {Component} from 'react';
import './portBody.css';
class PortBody extends Component {
    constructor (props) {
        super(props);
        this.state = {
        }
    }

    clickHandler = (e) => {
        e.preventDefault();
    }

    render (props) {
        return (
            <div>
                <div className="row">
                    <div className="rowItem">
                        <p id="bodyTitle">developer, engineer, human</p>
                    </div>
                    <div className="rowItem">
                        <p className="title">STATS</p>
                        <ul className="listText">
                            <li>Name: Benjamin Rodriguez</li>
                            <li>Age: under 39</li>
                            <li>Special 1: accelerated information absorption</li>
                            <li>Special 2: relentless questioning (cooldown applies)</li>
                            <li>Special 3: logical analysis</li>
                            <li>codeName: BIMATN</li>
                            <li>Email: bimatn@outlook.com</li>
                            <li><a className="link" href="https://www.linkedin.com/in/benjamin-rodriguez/" alt="bimatn linkedIn account" target="_blank">LinkedIn</a></li>
                            <li><a className="link" href="https://github.com/BIMATN" alt="bimatn gitHub account" target="_blank">GitHub</a></li>                     
                        </ul>
                    </div>
                </div>
                <div className="row">
                    Applications of Note
                </div>
                <div className="row">
                    Angel Fish
                </div>
                <div className="row">
                    <a className="rowItem" href="https://angelfish.herokuapp.com" alt="angelfish app" target="_blank"><img src="./images/angelFish.PNG" alt="angel fish screenshot"></img></a>
                    <ul className="rowItem">
                        <li>Blithering Speed</li>
                    </ul>
                </div>
                <div className="row">
                    Qu4tro
                </div>
                <div className="row">
                    <div className="rowItem"> 
                        <a href="https://qu4tro.herokuapp.com" alt="qu4tro app" target="_blank"><img src="./images/qu4tro.PNG" alt="quatro screenshot"></img></a>
                    </div>
                    <div className="rowItem">
                        <ul>
                            <li>Blithering Speed</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    Know Before You Go
                </div>
                <div className="row"> 
                    <a className="rowItem" href="https://bimatn.github.io/Project1/" alt="know before you go" target="_blank"><img src="./images/knowBeforeYouGo.PNG" alt="know before you go screenshot"></img></a>
                    <ul className="rowItem">
                        <li>Blithering Speed</li>
                    </ul>
                </div>
                <div className="row">
                    Metal Gear Solid Trivia
                </div>
                <div className="row"> 
                    <a className="rowItem" href="https://bimatn.github.io/TriviaGame/" alt="metal gear trivia" target="_blank"><img src="./images/metalGear.PNG" alt="metal gear screenshot"></img></a>
                    <ul className="rowItem">
                        <li>Blithering Speed</li>
                    </ul>
                </div>
                <div className="row">       
                    HangMan
                </div>
                <div className="row"> 
                    <a className="rowItem" href="https://bimatn.github.io/Hangman-Game/" alt="hangman game" target="_blank"><img src="./images/hangman.PNG" alt="hangman screenshot"></img></a>
                    <ul className="rowItem">
                        <li>Blithering Speed</li>
                    </ul>
                </div>
                <div className="row">
                    <p className="title">about me</p>
                </div>
                <div className="row">
                    "With every privilege comes a responsibility"
                </div>
                <div className="row">
                    <div className="rowItem bioText">
                        These words have rang true over and over again in my life, for better and for worse, but always for my education. Opportunities abound in this life but they come with a cost, and that toll can not be cheated. This is a founding principle for the way I approach my life, my work, my ethics, and my beliefs.
                    </div>
                </div>
                <div className="row">
                    "Work smarter, not harder"
                </div>
                <div className="row">
                    <div className="rowItem bioText">
                        At first glance this may seem a call to avoid hard work, but in truth it is the call of efficiency. The importance of thought before action. This concept is at the center of well designed systems. It is not a call for complexity, however. The KISS principle is ever present. The duality of these ideals - efficiency and simplicity - will be found in my development and engineering ventures.
                    </div>
                </div>
                <div className="row">
                    Man of Reason, Man of Faith
                </div>
                <div className="row">
                    <div className="rowItem bioText">
                        I am a follower of The Way, which is a more eloquent way of saying I am a Christian. And this informs my worldview. I intend to live a life of reasoned faith, and my work benefits from it. Whatever I seek to accomplish requires confidence in the possibility of success, a faith in the ability for it to be achieved, and a reasoned path to that end.
                    </div>
                </div>
            </div>
        )
    }
}

export default PortBody;