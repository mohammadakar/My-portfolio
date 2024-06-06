import ProjectCard from "./projectCard";
import projects from "../../data/projects.json"
import styles from "./projects.module.css"
const Projects = () => {
    return ( 
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.content}>
                {
                    projects.map((project,id)=>{
                        return <ProjectCard key={id} project={project}/> 
                    })
                }
            </div>
        </section>
    );
}

export default Projects;