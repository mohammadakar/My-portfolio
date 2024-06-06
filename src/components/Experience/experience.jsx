import styles from "./experience.module.css";
import history from "../../data/history.json";
import skills from "../../data/skills.json";
import {getImageUrl} from "../../utils"
const Experience = () => {
    return ( 
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>{skills.map((skill,id)=>{
                    return  (<div key={id} className={styles.skill}>
                                <div className={styles.skillImage}><img src={getImageUrl(skill.imageSrc)} alt={skill.title} /></div>
                                <p>{skill.title}</p>
                            </div>)
                    })}
                </div>
                <ul className={styles.history}>
                    {
                        history.map((historyItem,id)=>{
                            return <li key={id} className={styles.historyItem}>
                                <img src={historyItem.imageSrc} alt={historyItem.college} />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}, ${historyItem.college}`}</h3>
                                    <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
                                    <p>{historyItem.experience}</p>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </section>
    );
}

export default Experience;