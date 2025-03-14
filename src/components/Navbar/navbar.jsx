import styles from './navbar.module.css'
import {getImageUrl} from "../../utils"
import { useState } from 'react';
const Navbar = () => {
    const [menuOpen,setMenuOpen]=useState(false);
    return ( 
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Porfolio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} 
                    src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                    onClick={()=>setMenuOpen(!menuOpen)}/>
                <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`}
                    onClick={()=>setMenuOpen(false)}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Web Projects</a></li>
                    <li><a href="#aiprojects">AI Models</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;