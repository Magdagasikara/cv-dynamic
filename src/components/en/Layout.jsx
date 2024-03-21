import Footer from "./Footer";
import Header from "./Header";
import Hero from "../Hero";
// import HeroPrint from "../assets/img/sitting-broad-black-white.png"
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Outlet />
            </main>
            <Footer />
        </>
    )
}