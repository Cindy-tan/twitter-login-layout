import styles from './Button.module.css'

export default function Button ({
    title="default",
    color="default",
    text="default",
    border="default"
})
    {
    return(
        <button className={styles.button} style={{backgroundColor: color, color: text, borderColor: border}} onClick={() => console.log("Creating account")}>{title}</button>
    )
}