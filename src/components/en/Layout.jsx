import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Header />
            {/* <header><h1>Min header</h1></header> */}
            <Outlet />
            <Footer />
        </>
    )
}