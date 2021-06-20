import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
// import SinglePost from "./components/SinglePost";
import Resume from "./components/Resume";
import Project from "./components/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        {/* <Route component={SinglePost} path="/post:slug" /> */}
        <Route component={Resume} path="/resume" />
        <Route component={Project} path="/project" />
        <Route component={Contact} path="/contact" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
