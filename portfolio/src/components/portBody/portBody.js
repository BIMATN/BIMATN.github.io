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
                    <div>
                        <p id="bodyTitle">developer, engineer, human</p>
                    </div>
                    <div>
                        <p className="title">STATS</p>
                        <ul className="listText">
                            <li>Name: Benjamin Rodriguez</li>
                            <li>Age: under 39</li>
                            <li>Special 1: accelerated information absorption</li>
                            <li>Special 2: relentless questioning (cooldown applies)</li>
                            <li>Special 3: logical analysis</li>
                            <li>codeName: BIMATN</li>
                            <li>Email: bimatn@outlook.com</li>
                            <li><a className="link" href="https://www.linkedin.com/in/benjamin-rodriguez/" alt="bimatn linkedIn account" target="_blank">Connect with me on LinkedIn</a></li>
                            <li><a className="link" href="https://github.com/BIMATN" alt="bimatn gitHub account" target="_blank">View my GitHub</a></li>                     
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <p className="title">Applications of Note</p>
                </div>
                <div className="row">
                    <p className="title2">Angel Fish</p>
                </div>
                <div className="row">
                    <div className="rowImgItem">
                        <a  href="https://angelfish.herokuapp.com" alt="angelfish app" target="_blank"><img src="./images/angelFish.PNG" alt="angel fish screenshot"></img></a>
                    </div>
                    <div className="rowImgItem">
                        <p className="title2">Technology Stack</p>
                        <ul>
                            <li>React.js, Bootstrap</li>
                            <li>Node.js, Express</li>
                            <li>MySql, Sequelize</li>
                            <li>Axios, HTML, CSS, Javascript</li>
                        </ul>
                        <p className="title2">Functionality</p>
                        <ul>
                            <li>User login/sign in</li>
                            <li>Personal dashboard</li>
                            <li>Create and view products</li>
                            <li>Search for products</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <p className="title2">Qu4tro</p>
                </div>
                <div className="row">
                    <div className="rowImgItem"> 
                        <a href="https://qu4tro.herokuapp.com" alt="qu4tro app" target="_blank"><img src="./images/qu4tro.PNG" alt="quatro screenshot"></img></a>
                    </div>
                    <div className="rowImgItem">
                        <p className="title2">Technology Stack</p>
                        <ul>
                            <li>Bootstrap, HTML, CSS</li>
                            <li>Node.js, Express</li>
                            <li>MySql, Sequelize</li>
                            <li>AJAX, CSS, jQuery, Javascript</li>
                            <li>Heroku Hosting</li>
                        </ul>
                        <p className="title2">Functionality</p>
                        <ul>
                            <li>User login/sign in</li>
                            <li>Personal dashboard</li>
                            <li>Create and view quizzes</li>
                            <li>Find quiz by id</li>
                            <li>Utilize Qu4tro API</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <p className="title2">Know Before You Go</p>
                </div>
                <div className="row">
                    <div className="rowImgItem"> 
                        <a href="https://bimatn.github.io/Project1/" alt="know before you go" target="_blank"><img src="./images/knowBeforeYouGo.PNG" alt="know before you go screenshot"></img></a>
                    </div>
                    <div className="rowImgItem">
                        <p className="title2">Technology Stack</p>
                        <ul>
                            <li>Bootstrap, HTML, CSS</li>
                            <li>AJAX, jQuery, Javascript</li>
                            <li>Google Maps Web API, Open Weather API, Eventful API</li>
                            <li>GitHub Hosting</li>
                        </ul>
                        <p className="title2">Functionality</p>
                        <ul>
                            <li>Search for events by subject</li>
                            <li>Discover event details like weather, nearby food, and nearby Hotels</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <p className="title2">Metal Gear Solid Trivia</p>
                </div>
                <div className="row">
                    <div className="rowImgItem">
                        <a href="https://bimatn.github.io/TriviaGame/" alt="metal gear trivia" target="_blank"><img src="./images/metalGear.PNG" alt="metal gear screenshot"></img></a>
                    </div>
                    <div className="rowImgItem">
                        <p className="title2">Technology Stack</p>
                        <ul>
                            <li>Bootstrap, HTML, CSS</li>
                            <li>Javascript, jQuery</li>
                        </ul>
                        <p className="title2">Functionality</p>
                        <ul>
                            <li>Answer quiz questions about Metal Gear Solid</li>
                            <li>Find out your total score at the end</li>
                        </ul>
                    </div>
                </div>
                <div className="row">       
                    <p className="title2">HangMan</p>
                </div>
                <div className="row">
                    <div className="rowImgItem"> 
                        <a href="https://bimatn.github.io/Hangman-Game/" alt="hangman game" target="_blank"><img src="./images/hangman.PNG" alt="hangman screenshot"></img></a>
                    </div>
                    <div className="rowImgItem">
                        <p className="title2">Technology Stack</p>
                        <ul>
                            <li>Bootstrap, HTML, CSS</li>
                            <li>Javascript, jQuery</li>
                        </ul>
                        <p className="title2">Functionality</p>
                        <ul>
                            <li>Use your knowledge of cinema to guess the hidden word</li>
                            <li>Don't guess wrong too much, or you will lose</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <p className="title">about me</p>
                </div>
                <div className="row">
                    <p className="bioHeader">"With every privilege comes a responsibility"</p>
                </div>
                <div className="row">
                    <div className="rowItem bioText">
                        These words have rang true over and over again in my life, for better and for worse, but always for my education. Opportunities abound in this life but they come with a cost, and that toll can not be cheated. This is a founding principle for the way I approach my life, my work, my ethics, and my beliefs.
                    </div>
                </div>
                <div className="row">
                    <p className="bioHeader">"Work smarter, not harder"</p>
                </div>
                <div className="row">
                    <div className="rowItem bioText">
                        At first glance this may seem a call to avoid hard work, but in truth it is the call of efficiency. The importance of thought before action. This concept is at the center of well designed systems. It is not a call for complexity, however. The KISS principle is ever present. The duality of these ideals - efficiency and simplicity - will be found in my development and engineering ventures.
                    </div>
                </div>
                <div className="row">
                   <p className="bioHeader">Man of Reason, Man of Faith</p>
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