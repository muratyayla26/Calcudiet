import { useContext } from "react";
import { AuthContext } from "../../utility/AuthContext";
import { authentication } from "../../utility/firestore";
import { useHistory } from "react-router";
import { Link, NavLink } from "react-router-dom"; //Nav stillendirilecek
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
    navbar.classList.contains("showNav")
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }

  return (
    <div className={styles.navContainer}>
      <NavLink to="/">
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} alt="logo" />
          <h1 className={styles.header}>Calcudiet</h1>
        </div>
      </NavLink>

      <ul className={styles.navList}>
        <li>
          <NavLink
            className={styles.listElement}
            activeClassName={styles["active"]}
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles.listElement}
            activeClassName={styles["active"]}
            to="/search"
          >
            Search
          </NavLink>
        </li>

        {userId && (
          <>
            <li>
              <NavLink
                className={styles.listElement}
                activeClassName={styles["active"]}
                exact
                to="/user"
              >
                User
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.listElement}
                activeClassName={styles["active"]}
                to="/user/settings"
              >
                Settings
              </NavLink>
            </li>
          </>
        )}
        {userId ? (
          <li onClick={logoutHandler} className={styles.listElement}>
            <NavLink to="/">Logout</NavLink>
          </li>
        ) : (
          <li>
            <NavLink
              className={styles.listElement}
              activeClassName={styles["active"]}
              to="/LoginSignup"
            >
              Login
            </NavLink>
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
          {userId && (
            <li onClick={toggleHamburger} className={styles.listElement}>
              <Link to="/user">User</Link>
            </li>
          )}
          {userId ? (
            <li onClick={logoutHandler} className={styles.listElement}>
              <Link to="/">Logout</Link>
            </li>
          ) : (
            <li onClick={toggleHamburger} className={styles.listElement}>
              <Link to="/LoginSignup">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
