import styles from "./contact.module.css"
import {getImageUrl} from "../../utils"
const Contact = () => {
    return ( 
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2 >Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/mail.png")} alt="Email icon" />
                    <a href="mailto:moeakar123456@gmail.com">moeakar123456@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/telephone.png")} alt="phone icon" />
                    <a href="tell:96176058787">961-76058787</a>
                </li>
            </ul>
        </footer>
    );
}

export default Contact;