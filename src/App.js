import "./App.css";
// import "react-toastify/dist/ReactToastify.min.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Footer from "./components/footer";
import NavBar from "./components/navbar";
import Resume from "./pages/Resume";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/Notfound";



// import { ToastContainer } from "react-toastify";


function App() {
  return (
    <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route path="">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
    </Router>
  );
}

export default App;
