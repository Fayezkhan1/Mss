import Hero from "../components/Hero/Hero"
import Navbar from "../components/Navbar/navvbar"
import Aabout from "../components/About_us/About";
import Imagine from "../components/Imagine/Imagine"
import Footer from "../components/Footer/Footer"
function Home(){

    return(
        <>
            <Navbar />
                <Hero />
                <Aabout/>
                <Imagine/>
                <Footer/>

        </>

    )

}

export default Home;
