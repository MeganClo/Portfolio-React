import { useState, useEffect } from "react";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";
import { SocialIcon } from "react-social-icons";

const Project = () => {
    const [projectData, setProject] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
                liveLink,
                githubLink,
                body,
            }`)
            .then((data) => setProject(data))
            .catch(console.error);
    }, []);

    return (
        <main className="bg-gray-300 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center font-bold bold">My Projects</h1>
                <h2 className="text-lg light text-gray-600 flex justify-center mb-12">Check out some of my work.</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                        <article key={index}>

                            <h3 className="text-gray-800 text-3xl text-3xl flex justify-center bold mb-2 hover:text-red-700">
                                <a href={project.liveLink} alt={project.title} target="_blank" rel="noopener noreferrer" >
                                    {project.title}
                                </a>
                                <SocialIcon url={project.githubLink} className="mr-4 mr-8" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                            </h3>
                            <a href={project.liveLink} alt={project.title} target="_blank" rel="noopener noreferrer">
                                <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400" key={index}>
                                    <img src={project.mainImage.asset.url} alt={project.mainImage.alt} className="w-full h-full rounded-r object-cover absolute" />
                                </span>
                                <h4 className="text-gray-500 light space-x-4">

                                    <BlockContent
                                        blocks={project.body}
                                        projectId="w7zlp14w"
                                        dataset="production"
                                    />


                                </h4>
                            </a>

                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Project;
