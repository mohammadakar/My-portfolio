import { getImageUrl } from "../../utils";
import styles from "./hero.module.css"

const Hero = () => {
    return ( 
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I am Mohammad Akar</h1>
                <p className={styles.description}>Recent Computer Science graduate with a solid foundation in web development honed through two years of self-driven projects and hands-on practice. Complemented by seven months of industry experience four months in Quality Assurance and three months in software development where I contributed to testing strategies, automated workflows, and feature implementations. Adept at translating requirements into reliable, user-friendly applications and keen to leverage both analytical insight and coding proficiency in a dynamic development role.</p>
                <a href="mailto:moeakar123456@gmail.com" className={styles.contactBtn}>Contact me via email</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl('hero/heroImage.JPG')} alt="image of me" />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
}

export default Hero;