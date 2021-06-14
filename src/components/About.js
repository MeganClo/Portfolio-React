import { useState, useEffect } from "react";
import sanityClient from "../client";
import nature from "../nature.jpeg";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

const About = () => {
    const [author, setAuthor] = useState(null); 

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`)
        // .then((data) => console.log(data))
        .then((data) => setAuthor(data[0]))



        .catch(console.error);
    }, []);

    return (
        <main className="relative">
            <img src={nature} alt="abstract nature" className="absolute object-cover w-full"/>
            <div className="p-10 lg:pt-48 containter mx-auto relative">
                <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()} alt="author" className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"/>
                    <div>
                        <h1>
                            <div>
                                BLOCK Content
                            </div>
                        </h1>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default About;
