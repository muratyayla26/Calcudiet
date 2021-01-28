import { useContext } from "react";
import { AuthContext } from "../../utility/AuthContext";
import { authentication } from "../../utility/firestore";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import styles from "./styles/_nav.module.scss";
import "./styles/nav-ham-menu.css";
import logo from "./img/logo.png";

const Nav = () => {
  let history = useHistory();
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser ? currentUser.uid : localStorage.getItem("userId");

  const logoutHandler = () => {
    authentication.signOut();
    localStorage.setItem("userId", "");
    history.push("/");
    console.log("cikis basarili");
  };

  function toggleHamburger() {
    var navbar = document.querySelector(".navbar");
    var ham = document.querySelector(".ham");

    navbar.classList.toggle("showNav");
    ham.classList.toggle("showClose");
  }

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
        {userId ? (
          <li className={styles.listElement}>
            <Link to="/user">User</Link>
          </li>
        ) : (
          <div></div>
        )}
        {userId ? (
          <li onClick={logoutHandler} className={styles.listElement}>
            LOGOUT
          </li>
        ) : (
          <li className={styles.listElement}>
            <Link to="/LoginSignup">Login/Signup</Link>
          </li>
        )}
      </ul>

      <button
        className={`${styles.ham} ham`}
        onClick={toggleHamburger}
      ></button>
      <div className={`${styles.navbar} navbar`}>
        <ul>
          <li onClick={toggleHamburger}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={toggleHamburger}>
            <Link to="/search">Search</Link>
          </li>
          <li onClick={toggleHamburger}>
            <Link to="/user">User</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
