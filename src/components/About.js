import { useState, useEffect } from "react";
import sanityClient from "../client";

const About = () => {
    const [about, setAbout] = useState(null); 

    useEffect(() => {
        sanityClient.fetch(`*[type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAbout(data[0]))
        .catch(console.error);
    })
    return (
        <h1>About!</h1>
    )
}

export default About;
