import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./pages/Routes/Nav";
import Footer from "./pages/Routes/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import User from "./pages/User";
import styles from "./app.module.css"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/user">
            <User />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
