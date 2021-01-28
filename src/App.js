import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./pages/Routes/Nav";
import Footer from "./pages/Routes/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import User from "./pages/User";
import LoginSignup from "./pages/LoginSignup";
import { AuthProvider } from "./utility/AuthContext";

function App() {
  return (
    <AuthProvider>
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
            <Route path="/detail/:id">
              <Detail />
            </Route>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/LoginSignup">
              <LoginSignup />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
