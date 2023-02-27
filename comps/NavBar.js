import Link from 'next/link';
import styles from '../styles/NavBar.module.css'
import Image from 'next/image'
import { useState } from 'react'



const NavBar = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }



    return (
        <nav className={styles.nav}>
            <Link href="/" className={styles.donate} >Donate Today!</Link>
            <div className={toggle ? styles.navBarList : styles.navBarListShow}>
                <Link href={"/"} className={styles.link} onClick={handleToggle}>Home</Link>
                <Link href={"/Adopt"} className={styles.link} onClick={handleToggle}>Adopt</Link>
                <Link href={"/Surrender"} className={styles.link} onClick={handleToggle}>Surrender</Link>
                <Link href={"/Donation"} className={styles.link} onClick={handleToggle}>Donate</Link>
                <Link href={"/Contact"} className={styles.link} onClick={handleToggle}>Contact Us</Link>
            </div>
            <div className={styles.navBtn}>
                <i
                    onClick={handleToggle}
                    className={toggle ? 'fas fa-times' : 'fas fa-bars'
                    } ></i>
            </div>
        </nav>
    );
}

export default NavBar;