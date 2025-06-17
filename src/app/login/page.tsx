import Link from 'next/link';
import styles from './login.module.css';


const LoginPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>AUJ Store</h1>
      <p className={styles.p}>Welcome to AUJ Store</p>
      <form className={styles.form}>
        <h1>Log In</h1>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" placeholder='Enter your username' required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder='Enter your password' required />

        <button type="submit">Login</button>

        <p className={styles.p}>Don't have an account?<Link href="/signup"> Sign up</Link></p>
      </form>
    </div>
  );
}

export default LoginPage;