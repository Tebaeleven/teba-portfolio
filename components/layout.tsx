import Footer from "./Footer/Footer";
import Header from "./Header/header";

export default function Layout({ children }) {
    return(
        <>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}