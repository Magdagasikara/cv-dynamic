import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <main>
            <section className="pic-intro">
                <figure>
                    <img
                        src="src/assets/img/sitting-broad.png"
                        alt="Magda with Annapurna I in the background"
                    />
                </figure>
            </section>
            <section className="site-welcome">
                <h2>WELCOME TO MY UGLY WORLD!</h2>
            </section>
            <section className="card-container">
                {/* className="card" */}
                <Card style={{ width: '18rem' }}>
                    <Link to="./portfolio">
                        {/* <Card.Header as="h3">PORTFOLIO</Card.Header> */}
                        <Card.Img className="card-img" variant="top" src="/src/assets/img/computer.jpg" alt="Magdas laptop at her plantation spot" />
                        <Card.ImgOverlay>
                            {/* variant="top" */}
                            <Card.Body>
                                <Card.Title>PORTFOLIO</Card.Title>
                                <Card.Text>
                                    FOLLOW MY PROGRAMMING JOURNEY
                                </Card.Text>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Link>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Link to="./about">
                        {/* <Card.Header as="h3">ABOUT ME</Card.Header> */}
                        <Card.Img className="card-img" variant="top" src="./src/assets/img/road-long.jpg" alt="Neverending road in Isalo, Madagascar" />
                        <Card.Body>
                            <Card.Title>ABOUT ME</Card.Title>
                            <Card.Text>
                                MY WORK EXPERIENCE AND EDUCATION
                            </Card.Text>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Link to="./beachvolley">
                        {/* <Card.Header as="h3">BEACH VOLLEYBALL</Card.Header> */}
                        <Card.Img className="card-img" variant="top" src="../src/assets/img/beach.jpg" alt="Magda preparing to serve in a beachvolley match" />
                        <Card.Body>
                            <Card.Title>BEACH VOLLEYBALL</Card.Title>
                            <Card.Text>
                                THAT'S WHAT I DO TO RELAX
                            </Card.Text>
                        </Card.Body>
                    </Link>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Link to="./contact">
                        {/* <Card.Header as="h3">CONTACT ME</Card.Header> */}
                        <Card.Img className="card-img" variant="top" src="src/assets/img/coffee.jpg" alt="Magdas favourite cup of coffee" />
                        <Card.Body>
                            <Card.Title>CONTACT ME</Card.Title>
                            <Card.Text>
                                SHALL WE GET A CUP OF COFFEE?
                            </Card.Text>
                        </Card.Body>
                    </Link>
                </Card>
            </section>
        </main>
    )
}