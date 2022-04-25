import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}) {
    return (
        <div>
            <Header />
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}