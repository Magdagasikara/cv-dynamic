import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Portfolio() {
    const [pinnedRepos, setPinnedRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)

    const url_pinned = "https://gh-pinned-api.vercel.app/api?user=magdagasikara"
    // const url_github = 'https://api.github.com/users/magdagasikara/repos'

    useEffect(() => {
        fetch(url_pinned)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Something went wrong. Please try again later.")
                }
                return response.json()
            })
            .then((data) => {
                const pinnedRepos = data;

                setTimeout(() => {
                    setPinnedRepos(pinnedRepos);
                    setIsLoading(false)
                }, 3000)

            })
            .catch((error) => { console.log(error) })

    }, []);

    const variant = ["dark", "info", "danger", "success"];

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
        } else if (errorMessage) {
            return <p>{errorMessage}</p>;
        }
        else {
            return (
                <section className="card-container">
                    {
                        pinnedRepos.map((repo, index) => {

                            return (
                                <article key={repo.name}>
                                    <Card
                                        style={{ width: '18rem' }}
                                        bg={variant[index % 4]}
                                    >
                                        <Card.Link href={repo.url}>
                                            <Card.Body className="portfolio">
                                                <Card.Title>
                                                    <h5>{repo.name}</h5>
                                                </Card.Title>

                                                <Card.Text key="desc">
                                                    {repo.description}
                                                </Card.Text>
                                                {repo.languages.map(lang => {
                                                    return <Card.Text className="language" key={lang}> {lang} </Card.Text>;
                                                })}
                                                <br />
                                                <Button variant="primary">See {repo.name} on GitHub</Button>
                                            </Card.Body>
                                        </Card.Link>
                                    </Card>
                                </article>
                            )
                        })
                    }
                </section >
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