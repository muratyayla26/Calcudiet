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
    <div className={styles["container"]}>
      <input onChange={emailChangeHandler} name="email" value={email} />
      <input
        type="password"
        onChange={passwordChangeHandler}
        name="password"
        value={password}
      />
      <button onClick={loginHandler}>LOGIN</button>
      <button onClick={signupHandler}>SIGN UP</button>
    </div>
  );
};

export default LoginSignup;
