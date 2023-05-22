import Footer from "./footer";
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