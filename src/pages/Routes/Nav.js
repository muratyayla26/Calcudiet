import { Link } from "react-router-dom";
import styles from "./styles/_nav.module.scss";
import logo from "./img/logo.png";

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt="logo" />
        <h1 className={styles.header}>Calcudiet</h1>
      </div>

      <ul className={styles.navList}>
        <li className={styles.listElement}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.listElement}>
          <Link to="/search">Search</Link>
        </li>
        <li className={styles.listElement}>
          <Link to="/user">User</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
