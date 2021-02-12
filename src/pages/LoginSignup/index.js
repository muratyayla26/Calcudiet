import { useState } from "react";
import { authentication } from "../../utility/firestore";
import styles from "./index.module.scss";
import { useHistory } from "react-router";

export const LoginSignup = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setpassword(e.target.value);
  };

  const loginHandler = () => {
    authentication.signInWithEmailAndPassword(email, password).then((cred) => {
      if (cred) {
        console.log("giris basarili");
        localStorage.setItem("userId", cred.user.uid);
        history.push("/user");
      } else {
        console.log("giris yapilamadi");
      }
    });
  };

  const signupHandler = () => {
    authentication
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        if (cred) {
          console.log("yeni uyelik acildi");
          localStorage.setItem("userId", cred.user.uid);
          history.push("/user");
        } else {
          console.log("yeni uyelik acilamadi");
        }
      });
  };

  return (
    <div className={styles.container}>

      <div className={styles.inputContainer}>
      <input className={styles.emailinput} onChange={emailChangeHandler} name="email" value={email} placeholder="E-mail" />
      <input
      className={styles.passwordinput}
      type="password"
      onChange={passwordChangeHandler}
      name="password"
      value={password}
      placeholder="Password"
      />
      </div>
      <div className={styles.btnContainer}>

      <button  className={styles.loginbtn}  onClick={loginHandler}>LOGIN</button>
      <button  className={styles.signbtn} onClick={signupHandler}>SIGN UP</button>
      </div>
    </div>
  );
};

export default LoginSignup;
