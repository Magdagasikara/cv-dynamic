import { NavLink, Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="print-remove">
            <h1 className="magda_en">
                <Link to="./">
                    MAGDA KUBIEŃ
                    <br />
                    <span>YOUR NEXT .NET DEVELOPER</span>
                </Link>
            </h1>
            <nav>
                <input type="checkbox" id="nav-toggle" />
                <label htmlFor="nav-toggle" id="nav-icon">
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
                        >
                            <i className="fa-brands fa-linkedin" />
                        </Link>
                        <Link to="https://github.com/Magdagasikara" target="_blank">
                            <i className="fa-brands fa-github" />
                        </Link>
                    </li>
                    {/* <li class="menu-item language-container en"><a href="./index.html">EN<i
                          class="fa-solid fa-caret-down"></i></a>
                      </li>
                      <li class="menu-item language-container sv"><a href="./sv/index.html">SV<i
                          class="fa-solid fa-caret-down"></i></a>
                      </li> */}
                    <li className="menu-item language-container sv">
                        <NavLink to="./sv/">
                            <i className="fa-solid fa-globe" />
                            SV
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}