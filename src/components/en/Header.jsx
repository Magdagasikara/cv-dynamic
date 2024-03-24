import { useState } from "react";
import { NavLink, Link } from "react-router-dom"
// applicera toggleMenu med Js

export default function Header() {
    // const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

    // const toggleMenu = () => {
    //     setIsModalOpen(!isHamburgerMenuOpen);
    // }

    return (
        <header className="print-remove">
            <h1 className="magda_en">
                <Link to="./">
                    MAGDA KUBIEŃ
                    <br />
                    <span>Your next .NET developer</span>
                </Link>
            </h1>
            <nav>
                <input type="checkbox" id="nav-toggle" />
                <label htmlFor="nav-toggle" id="nav-icon" >
                    <i className="fa-solid fa-bars" />
                </label>
                <ul className="menu">
                    <li className="menu-item">
                        <NavLink to="./">HOME</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="./portfolio">PORTFOLIO</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="./about">ABOUT ME</NavLink>
                    </li>
                    <li className="menu-item">
                        <Link to="/kubien-cv-sv.pdf" target="_blank" download>
                            CV
                            <i className="fa-solid fa-download" />
                        </Link>
                    </li>
                    <li className="menu-item">
                        <NavLink to="./beachvolley">BEACH</NavLink>
                    </li>
                    <li className="menu-item contact">
                        <NavLink to="./contact">CONTACT</NavLink>
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
                    </li>
                    {/*  i framtiden nedan: to="./sv/" */}
                    <li className="menu-item language-container sv" >
                        <NavLink to="./" aria-label="Choose language">
                            <i className="fa-solid fa-globe" />
                            SV
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}