import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { PacmanLoader } from "react-spinners";

export default function Portfolio() {
    const [pinnedRepos, setPinnedRepos] = useState([])
    const [repos, setRepos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const url_pinned = "https://gh-pinned-api.vercel.app/api?user=magdagasikara"
    // const url_github = 'https://api.github.com/users/magdagasikara/repos'

    useEffect(() => {
        fetch(url_pinned)
            .then((response) => response.json())
            .then((data) => {
                const pinnedRepos = data;

                setTimeout(() => {
                    setPinnedRepos(pinnedRepos);
                    setIsLoading(false)
                }, 3000)

            })
        // .catch()

    }, []);

    const renderLoadingOrPortfolio = () => {
        if (isLoading) {
            return (
                <Button variant="secondary" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />{" "}Waiting for the glorious repos to emerge...
                </Button>
            )
        } else {
            return (
                <section className="card-container">
                    {
                        pinnedRepos.map(repo => {
                            return (
                                <Card style={{ width: '18rem' }} key={repo.name}>
                                    <Card.Link href={repo.url}>
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>
                                                <h5>{repo.name}</h5>
                                            </Card.Title>
                                            <Card.Text>
                                                <p>{repo.description}</p>
                                                <p>Used languages: {repo.languages.map(lang => { return lang; })}</p>
                                            </Card.Text>
                                            <Button variant="primary">Go to GitHub</Button>
                                        </Card.Body>
                                    </Card.Link>
                                </Card>
                            )
                        })
                    }
                </section>
            )
        }
    }

    return (
        <>

            <section className="site-welcome">
                <h2>MY PORTFOLIO</h2>
                <p>Take a look at my projects!</p>
            </section>

            {renderLoadingOrPortfolio()}

        </>
    )

}