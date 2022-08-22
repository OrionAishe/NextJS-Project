import styles from "./navigationbar.module.scss";
import Link from "next/link";

const NavigationBar = () => {
    return <header className={styles.Header}>
        <div className={styles.Header__Title}>
            <Link href={"/"}>Loja X</Link>
        </div>
            <ul className={styles.Nav}>
                <li className={styles.Nav__Item}><Link href="/Produtos">Produtos</Link></li>
                <li className={styles.Nav__Item}><Link href={"/Contato"}>Contato</Link></li>
                <li className={styles.Nav__Item}><Link href="/Local">Local</Link></li>
            </ul>
    </header>
}

export default NavigationBar;