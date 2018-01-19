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
            <div id="container">
                <p><h1>welcome, please allow me to introduce myself</h1></p>
                <section>
                    <h2>STATS</h2>
                    <ul>
                        <li><h3>Name: Benjamin Rodriguez</h3></li>
                        <li><h3>Age: under 39</h3></li>
                        <li><h3>Specialty: rapid learning</h3></li>
                        <li><h3>codeName: BIMATN</h3></li>
                    </ul>
                </section>
                <section>
                    <h2>Man of Reason, Man of Faith</h2>
                    <ul>
                        <li><h3>"With every privilege comes a responsibility"</h3></li>
                        <li>These words have rang true over and over again in my life, for better and for worse, but always for my education. Opportunities abound in this life but they come with a cost, and that toll can not be cheated. This is a founding principle for the way I approach my life, my work, my ethics, and my beliefs.</li>
                        <li><h3>"Work smarter, not harder"</h3></li>
                        <li>At first glance this may seem a call to avoid hard work, but in truth it is the call of efficiency. The importance of thought before action. This concept is at the center of well designed systems. It is not a call for complexity, however. The KISS principle is ever present. The duality of these ideals - efficiency and simplicity - will be found in my development and engineering ventures.</li>
                        <li><h3>Faith</h3></li>
                        <li>I am a follower of The Way, which is a more eloquent way of saying I am a Christian. And this informs my worldview. I intend to live a life of reasoned faith, and my work benefits from it. Whatever I seek to accomplish requires confidence in the possibility of success, a faith in the ability for it to be achieved, and a reasoned path to that end.</li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default PortBody;