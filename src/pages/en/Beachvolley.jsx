import { useState, useEffect } from "react";
import PicBeach from "../../assets/img/beach-extra.jpg";


export default function Beachvolley() {

    const [isEasterEggActivated, setIsEasterEggActivated] = useState(false);

    useEffect(() => {
        const beachImg = document.getElementById("beach-intro");
        const main = document.querySelector("main");
        if (isEasterEggActivated) {
            main.style.backgroundImage = `url(${PicBeach})`; // Använd backticks för att infoga variabler i en sträng
            main.style.backgroundRepeat = "no-repeat";
            main.style.backgroundSize = "cover";
            main.style.minHeight = "800px";
        } else {
            main.style.backgroundImage = "";
            main.style.backgroundRepeat = "";
            main.style.backgroundSize = "";
            main.style.minHeight = "";
        }

    }, [isEasterEggActivated])

    return (
        <>
            <section className="site-welcome" id="welcome-beach" onClick={() => setIsEasterEggActivated(!isEasterEggActivated)}>
                <h2>BEACH VOLLEYBALL</h2>
            </section>
            <section className="card-container">
                <article id="card">
                    <p>One day this website will be filled with information. or not.</p>
                </article>
            </section>
        </>
    )
}