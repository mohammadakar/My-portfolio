import { getImageUrl } from "../../utils";
import styles from "./about.module.css"

const About = () => {
    return ( 
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImage} src="https://miro.medium.com/v2/resize:fit:1400/1*29NeeIGT0BElEBNfzE_VlQ.jpeg" alt="About image" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img className={styles.aboutItemImage} src={getImageUrl("about/server.png")} alt="server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Full-stack Developer</h3>
                            <p>I am a full-stack developer fast developing and optimised backend systems and APIs</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img className={styles.aboutItemImage} src={getImageUrl("about/tester.png")} alt="server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>QA engineer</h3>
                            <p>Quality assurance for websites and API&apos;s</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About;