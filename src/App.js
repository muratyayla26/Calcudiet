import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./pages/Routes/Nav";
//import Footer from "./pages/Routes/Footer/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import User from "./pages/User";
import LoginSignup from "./pages/LoginSignup";
import UserSettings from "./pages/User/SubPages/UserSettings/UserSettings";
import { AuthProvider } from "./utility/AuthContext";
import styles from "./app.module.css";
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
            {/* todo: below should be protected route
					https://ui.dev/react-router-v5-protected-routes-authentication/ */}
            <Route exact path="/user">
              <User />
            </Route>
            <Route path="/user/settings">
              <UserSettings />
            </Route>
            {/* todo: login & signup should be seperate */}
            <Route path="/LoginSignup">
              <LoginSignup />
            </Route>
          </Switch>

          {/* <Footer /> */}
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
