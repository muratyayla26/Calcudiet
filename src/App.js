import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./pages/Routes/Nav";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import User from "./pages/User";
import LoginSignup from "./pages/LoginSignup";
import UserInfo from "./pages/User/UserInfo/UserInfo";
import { AuthProvider } from "./utility/AuthContext";
import styles from "./app.module.scss";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className={styles.mainContainer}>
          <Nav />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/detail/:id">
              <Detail />
            </Route>
            <Route exact path="/user">
              <User />
            </Route>
            <Route path="/user/settings">
              <UserInfo />
            </Route>
            <Route path="/LoginSignup">
              <LoginSignup />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
