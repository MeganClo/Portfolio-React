// import image from "../background.jpg"
import image from "../background.jpeg";
import Typed from "react-typed";


const Home = () => {
    return (
        <main>
            <img src={image} alt="dark-water" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6-xl bold font-bold text-blue-100 leading-non lg:leading-snug home-name">Hi. I'm Megan.</h1>
            </section>
        </main>
    )
}

export default Home;
