import { useState, useEffect } from "react";
import sanityClient from "../client";
import nature from "../nature.jpeg";

const About = () => {
    const [author, setAuthor] = useState(null); 

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            image{
                asset->{
                    _id,
                    url
                },
                alt
            },
        }`)
        // .then((data) => console.log(data[0]))
        .then((data) => setAuthor(data[0]))



        .catch(console.error);
    }, []);

    return (
        <main className="relative">
            <img src={nature} alt="abstract nature" className="absolute object-cover w-full"/>
            <div className="p-10 lg:pt-48 containter mx-auto relative">
                <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={author.image.asset.url} alt="author" className="rounded w-32 lg:w-64 mr-8"/>
                    <div>
                        <h1>
                            <div>
                                {author.name}
                            </div>
                        </h1>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default About;
