export default function Header() {
    return (
        <header className="printRemove">
            <h1 className="magda_en">
                <a href="./index.html">
                    MAGDA KUBIEŃ
                    <br />
                    <span>DIN NÄSTA .NET UTVECKLARE</span>
                </a>
            </h1>
            <nav>
                <input type="checkbox" id="nav-toggle" />
                <label htmlFor="nav-toggle" id="nav-icon">
                    <i className="fa-solid fa-bars" />
                </label>
                <ul className="menu">
                    <li className="menu-item active">
                        <a href="./index.html">HEM</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">PORTFOLIO</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">OM MIG</a>
                    </li>
                    <li className="menu-item">
                        <a href="./files/kubien-cv-sv.pdf" download="">
                            CV
                            <i className="fa-solid fa-download" />
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#">BEACH</a>
                    </li>
                    <li className="menu-item contact">
                        <a href="#">KONTAKT</a>
                        <a
                            href="https://www.linkedin.com/in/magdalena-kubien-79964297/"
                            target="_blank"
                        >
                            <i className="fa-brands fa-linkedin" />
                        </a>
                        <a href="https://github.com/Magdagasikara" target="_blank">
                            <i className="fa-brands fa-github" />
                        </a>
                    </li>
                    <li className="menu-item language-container en">
                        <a href="../index.html">
                            <i className="fa-solid fa-globe" />
                            EN
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}