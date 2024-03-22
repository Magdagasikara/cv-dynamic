import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="print-remove">
            <p>© Magda Kubień 2024</p>
            <p>
                <Link to="./contact.html">CONTACT</Link>
                <Link
                    to="https://www.linkedin.com/in/magdalena-kubien-79964297/"
                    target="_blank"
                    aria-label="Linkedin"
                >
                    <i className="fa-brands fa-linkedin" />
                </Link>
                <Link
                    to="https://github.com/Magdagasikara"
                    target="_blank"
                    aria-label="GitHub"
                >
                    <i className="fa-brands fa-github" />
                </Link>
            </p>
        </footer>
    )
}