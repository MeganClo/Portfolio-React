import { useState, useEffect } from "react"
import sanityClient from "../client";

const Project = () => {
    const [projectData, setProject] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "project"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data) => setProject(data))
            .catch(console.error);
    }, []);

    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center bold">My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to My Project Page</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <article>
                        <Link>
                        <span>
                            <img src="" alt=""/>
                            <span>
                                <h3></h3>
                            </span>
                        </span>
                        </Link>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default Project;
