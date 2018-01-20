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
                <p id="bodyTitle">developer, engineer, human</p>
                <div>
                    <h2>STATS</h2>
                    <ul className="text">
                        <li><h3>Name: Benjamin Rodriguez</h3></li>
                        <li><h3>Age: under 39</h3></li>
                        <li><h3>Special 1: accelerated information absorption</h3></li>
                        <li><h3>Special 2: relentless questioning</h3></li>
                        <li><h3>Special 3: logical analysis</h3></li>
                        <li><h3>codeName: BIMATN</h3></li>
                        <li><h3>Email: bimatn@outlook.com</h3></li>
                        <li><a href="https://www.linkedin.com/in/benjamin-rodriguez/" alt="bimatn linkedIn account" target="_blank"><h3 className="link">LinkedIn</h3></a></li>
                        <li><a href="https://github.com/BIMATN" alt="bimatn gitHub account" target="_blank"><h3 className="link">GitHub</h3></a></li>                     
                    </ul>
                </div>
            </div>
            <div className="row">
                <h2>Applications of Note</h2>
            </div>
            <div className="row">
                <h2>Angel Fish</h2>
            </div>
            <div className="row text">
                <a href="https://angelfish.herokuapp.com" alt="angelfish app" target="_blank"><img src="./images/angelFish.PNG" alt="angel fish screenshot"></img></a>
            </div>
            <div className="row">
                <h2>Qu4tro</h2>
                <a href="https://qu4tro.herokuapp.com" alt="qu4tro app" target="_blank"><img src="./images/qu4tro.PNG" alt="quatro screenshot"></img></a>
            </div>
            <div className="row">
                <div>
                    <h2>Know Before You Go</h2>
                    <a href="https://bimatn.github.io/Project1/" alt="know before you go" target="_blank"><img src="./images/knowBeforeYouGo.PNG" alt="know before you go screenshot"></img></a>
                    <h2>Metal Gear Solid Trivia</h2>
                    <a href="https://bimatn.github.io/TriviaGame/" alt="metal gear trivia" target="_blank"><img src="./images/metalGear.PNG" alt="metal gear screenshot"></img></a>
                </div>
                <div>
                    <h2>HangMan</h2>
                    <a href="https://bimatn.github.io/Hangman-Game/" alt="hangman game" target="_blank"><img src="./images/hangman.PNG" alt="hangman screenshot"></img></a>
                </div>
                <div className="text">
                    <h2>About Me</h2>
                    <h2>Man of Reason, Man of Faith</h2>
                    <h3>"With every privilege comes a responsibility"</h3>
                    These words have rang true over and over again in my life, for better and for worse, but always for my education. Opportunities abound in this life but they come with a cost, and that toll can not be cheated. This is a founding principle for the way I approach my life, my work, my ethics, and my beliefs.
                    <h3>"Work smarter, not harder"</h3>
                    At first glance this may seem a call to avoid hard work, but in truth it is the call of efficiency. The importance of thought before action. This concept is at the center of well designed systems. It is not a call for complexity, however. The KISS principle is ever present. The duality of these ideals - efficiency and simplicity - will be found in my development and engineering ventures.
                    <h3>Faith</h3>
                    I am a follower of The Way, which is a more eloquent way of saying I am a Christian. And this informs my worldview. I intend to live a life of reasoned faith, and my work benefits from it. Whatever I seek to accomplish requires confidence in the possibility of success, a faith in the ability for it to be achieved, and a reasoned path to that end.
                </div>
            </div>
            </div>
        )
    }
}

export default PortBody;