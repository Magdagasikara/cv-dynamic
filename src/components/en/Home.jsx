import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <section className="site-welcome">
                <h2>WELCOME TO MY UGLY WORLD!</h2>
            </section>
            <section className="card-container">
                <Card style={{ width: '18rem' }}>
                    <Link to="./portfolio">
                        <Card.Img className="card-img" variant="top" src={import.meta.env.BASE_URL + "src/assets/img/computer.jpg"} alt="Magdas laptop at her plantation spot" />
                        <Card.Body>
                            <Card.Title>Follow my programming journey</Card.Title>
                            <Button variant="primary">See my portfolio</Button>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Link to="./about">
                        <Card.Img className="card-img" variant="top" src={import.meta.env.BASE_URL + "src/assets/img/road-long.jpg"} alt="Neverending road in Isalo, Madagascar" />
                        <Card.Body>
                            <Card.Title>My work experience and education</Card.Title>
                            <Button variant="primary">Read about me</Button>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Link to="./beachvolley">
                        <Card.Img className="card-img" variant="top" src={import.meta.env.BASE_URL + "src/assets/img/beach.jpg"} alt="Magda preparing to serve in a beachvolley match" />
                        <Card.Body>
                            <Card.Title> That's what I do to relax</Card.Title>
                            <Button variant="primary">Read about my love for beach volley</Button>
                        </Card.Body>
                    </Link>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Link to="./contact">
                        <Card.Img className="card-img" variant="top" src={import.meta.env.BASE_URL + "src/assets/img/coffee.jpg"} alt="Magdas favourite cup of coffee" />
                        <Card.Body>
                            <Card.Title>
                                Shall we get a cup of coffee?
                            </Card.Title>
                            <Button variant="primary">Contact me</Button>
                        </Card.Body>
                    </Link>
                </Card>
            </section>
        </>
    )
}