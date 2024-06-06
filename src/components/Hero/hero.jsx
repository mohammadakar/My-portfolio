import { getImageUrl } from "../../utils";
import styles from "./hero.module.css"

const Hero = () => {
    return ( 
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I am Mohammad Akar</h1>
                <p className={styles.description}>I am a full-stack developer with expertise in React, NodeJS, Express, and MongoDB,
                        as well as proficiency in HTML, CSS, JavaScript, PHP, and MySQL. Feel free to reach out if you&apos;d like to learn more about my work!</p>
                <a href="mailto:moeakar123456@gmail.com" className={styles.contactBtn}>Contact me via email</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl('hero/heroImage.JPG')} alt="image of me" />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
}

export default Hero;