export default function Contact() {
    return (
        <>
            <section className="site-welcome">
                <h2>CONTACT ME</h2>
                <p>Shall we meet over a cup of coffee?</p>
            </section>
            <section className="card-container">
                <article className="card">
                    <a href="mailto: magdalena.kubien(@)gmail.com?subject = Hi Magda!&body = I want to give you a job.">
                        <i className="fa-solid fa-at" />
                    </a>
                </article>
                <article className="card">
                    <a
                        href="https://www.linkedin.com/in/magdalena-kubien-79964297/"
                        target="_blank"
                    >
                        <i className="fa-brands fa-linkedin" />
                    </a>
                </article>
                <article className="card">
                    <a href="https://github.com/Magdagasikara" target="_blank">
                        <i className="fa-brands fa-github" />
                    </a>
                </article>
            </section>
        </>
    )
}