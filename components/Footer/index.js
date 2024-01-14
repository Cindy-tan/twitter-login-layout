import styles from './Footer.module.css'

export default function Footer({
    text="default"
})
 {
    return(
        <a href="#" className={styles.footer} style={{color: text}} onClick={() => console.log("default")}>{text}</a>
    )
}