import styles from "./login.module.scss";

const Login = () => {
    return <div className={styles.Loginform}>
    <label>Login:</label>
    <input type="text" />
    <label>Senha:</label>
    <input type="password" />
    </div>
}

export default Login;