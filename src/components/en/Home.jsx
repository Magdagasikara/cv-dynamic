import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import PicBeach from "../../assets/img/beach.jpg";
import PicCoffee from "../../assets/img/coffee.jpg";
import PicComputer from "../../assets/img/computer.jpg";
import PicLongRoad from "../../assets/img/road-long.jpg";


export default function Home() {
    return (
        <>
            <section className="site-welcome">
                <h2>Hi! I am Magda. Welcome to my ugly world.</h2>
                <p>Don't worry. I want to work as a developer, not a designer.</p>
            </section>
            <section className="card-container">
                <article>
                    <Card style={{ width: '18rem' }}>
                        <Link to="./portfolio">
                            <Card.Img className="card-img" variant="top" src={PicComputer} alt="Magdas laptop at her plantation spot" />
                            <Card.Body>
                                <Card.Title>My programming journey</Card.Title>
                                <Button variant="primary">See my portfolio</Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </article>
                <article>
                    <Card style={{ width: '18rem' }}>
                        <Link to="./about">
                            <Card.Img className="card-img" variant="top" src={PicLongRoad} alt="Neverending road in Isalo, Madagascar" />
                            <Card.Body>
                                <Card.Title>Analyst becoming developer</Card.Title>
                                <Button variant="primary">Read about me</Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </article>
                <article>
                    <Card style={{ width: '18rem' }}>
                        <Link to="./beachvolley">
                            <Card.Img className="card-img" variant="top" src={PicBeach} alt="Magda preparing to serve in a beachvolley match" />
                            <Card.Body>
                                <Card.Title> That's what I do to relax</Card.Title>
                                <Button variant="primary">Read about my best hobby</Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </article>
                <article>
                    <Card style={{ width: '18rem' }}>
                        <Link to="./contact">
                            <Card.Img className="card-img" variant="top" src={PicCoffee} alt="Magdas favourite cup of coffee" />
                            <Card.Body>
                                <Card.Title>
                                    Shall we get a cup of coffee?
                                </Card.Title>
                                <Button variant="primary">Contact me</Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </article>
            </section>
        </>
    )
}