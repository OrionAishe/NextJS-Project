import styles from "./navigationbar.module.scss";

const NavigationBar = () => {
    return <header className={styles.Header}>
        <div className={styles.Header__Title}>
            Loja X
        </div>
            <ul className={styles.Nav}>
                <li className={styles.Nav__Item}>Produtos</li>
                <li className={styles.Nav__Item}>Contato</li>
                <li className={styles.Nav__Item}>Local</li>
            </ul>
    </header>
}

export default NavigationBar;