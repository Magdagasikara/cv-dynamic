import Footer from "./Footer";
import Header from "./Header";
import Hero from "../Hero";
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