import ProjectCard from "./projectCard";
import projects from "../../data/AiModels.json"
import styles from "./projects.module.css"
const AiProjects = () => {
    return ( 
        <section className={styles.container} id="aiprojects">
            <h2 className={styles.title}>AI Models</h2>
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

export default AiProjects;