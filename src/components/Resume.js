

import Fade from "react-reveal/Fade";
import Typed from "react-typed";
import ResumePDF from "../assets/resume/resume.pdf"

const Resume = () => {
    return (
        <>

            <div style={styles.block}>
                <Fade top>
                    <h1 style={styles.title}>Front End Skills</h1>
                    <h4 style={{ textAlign: "center" }} className="text-yellow-100">
                        <Typed
                            strings={["JavaScript", "HTML5", "Bootstrap", "React", "APIs", "Git/Github", "Object Oriented Programming"]}
                            typeSpeed={50}
                            backSpeed={50}
                        /></h4>
                </Fade>

            </div>
            <div style={styles.block}>
                <Fade top>
                    <h1 style={styles.title}>Back End Skills</h1>
                    <h4 style={{ textAlign: "center" }} className="text-yellow-100">
                        <Typed
                            strings={["Node.js", "MySQL", "JavaScript", "NoSQL", "Express.js", "MERN", "server-side APIs"]}
                            typeSpeed={50}
                            backSpeed={50}
                        /></h4>
                </Fade>

            </div>
            <div style={styles.block}>
                <Fade top>
                    <h1 style={styles.title}>Other Skills</h1>
                    <h4 style={{ textAlign: "center" }} className="text-yellow-100">
                        <Typed
                            strings={["Communication", "Grit", "Teamwork", "Fast Learner", "Problem Solver"]}
                            typeSpeed={50}
                            backSpeed={50}
                        /></h4>
                </Fade>

            </div>
            <div style={styles.block}>
                <h2 style={{ textAlign: "center" }}>
                    <button style={{ textAlign: "center" }} className="py-3 px-3 my-6 rounded text-yellow-200 light">
                        <a className="button" href={ResumePDF} download="MeganCloseResume.pdf">
                        Download My Resume
                        </a>
                    </button>
                </h2>
            </div>
        </>
        
    )


}

const styles = {
    block: {
        // display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: "#000",
        borderBottom: "1px solid rgba(255,255,255,.2)",
    },
    title: {
        textAlign: "center",
        fontSize: 100,
        color: "#fff",
        fontWeight: 100
    }
}

export default Resume;
