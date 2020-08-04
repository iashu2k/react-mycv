import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/about";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Blogs from "./components/blogs";
import Contact from "./components/contact";
import Error from "./components/error";

function App() {
  const background =
    "https://image.freepik.com/free-vector/abstract-design-blue-background_23-2148497489.jpg";
  return (
    <div
      className="bg-fixed sm:bg-local md:bg-scroll lg:bg-local xl:bg-fixed p-2 lg:p-8 font-body min-h-screen"
      style={{
        backgroundImage: `url("${background}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto bg-white rounded-lg lg:p-8 p-6">
        <Navbar />
        <Switch>
          <Route path="/about" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/contact" component={Contact} />
          <Redirect from="/" to="/about" exact />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
