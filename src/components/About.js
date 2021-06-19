
import drops from "../drops.jpeg";
import Me from "../Me.jpg"

const About = () => {
    // const [author, setAuthor] = useState(null); 

    // useEffect(() => {
    //     sanityClient.fetch(`*[_type == "author"]{
    //         name,
    //         bio,
    //         image{
    //             asset->{
    //                 _id,
    //                 url
    //             },
    //             alt
    //         },
    //     }`)
    //     // .then((data) => console.log(data[0]))
    //     .then((data) => setAuthor(data[0]))



    //     .catch(console.error);
    // }, []);

    return (
        <main className="relative">
            <img src={drops} alt="abstract nature" className="absolute object-cover w-full h-full"/>
            <div className="p-10 lg:pt-48 containter mx-auto relative">
                <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={Me} alt="author" className="rounded h-32 lg:h-64 mr-8"/>
                    <div className="text-lg bold flex flex-col justify-center">
                        <h1 className="bold text-6xl text-green-300 mb-4">
                            Hi, I'm{" "}
                            <span className="text-green-100">Megan</span>
                        </h1>
                        <div className="prose lg:prose-xl light text-white">
                        I'm a Minnesota made, California cultivated gal who loves solving problems and learning new things. I thrive when I'm working with others. When I'm not coding and learning new skills, you can find me hiking with my dog, Buzz, enjoying a good book in my hammock, or crocheting. 
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default About;
