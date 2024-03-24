import Footer from "./Footer";
import Header from "./Header";
import Hero from "../Hero";
import MadaLink from "../MadaLink";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Outlet />
                <MadaLink />
            </main>
            <Footer />
        </>
    )
}