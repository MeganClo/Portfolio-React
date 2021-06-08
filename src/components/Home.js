// import image from "../background.jpg"
import image from "../background.jpeg"


const Home = () => {
    return (
        <main>
            <img src={image} alt="plant leaves background" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6-xl bold font-bold text-blue-100 leading-non lg:leading-snug home-name">Hello. I'm Megan.</h1>
            </section>
        </main>
    )
}

export default Home;
