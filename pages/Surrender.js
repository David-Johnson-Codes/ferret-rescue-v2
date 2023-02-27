import styles from '@/styles/Surrender.module.css'
import Image from 'next/image'

const Surrender = () => {
    return (
        <>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
                    integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
                    crossorigin="anonymous" referrerpolicy="no-referrer" />
            </head>
            <section className={styles.mainContainer}>
                <h1 className={styles.someText}>Surrendering</h1>
            </section>
            < section className={styles.infoContainer} >
                <div className={styles.textContainer}>
                    <h2>Surrendering a Ferret</h2>
                    <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed delectus laudantium doloribus impedit debitis facilis unde animi quod illum iste!</p>
                    <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed delectus laudantium doloribus impedit debitis facilis unde animi quod illum iste!</p>
                    <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed delectus laudantium doloribus impedit debitis facilis unde animi quod illum iste!</p>
                </div>
                <div className={styles.imgContainer}>
                    <img className={styles.img} src={'/ferret-surrender.jpg'} />
                </div>
            </section >
        </>
    );
}

export default Surrender;