import React from "react";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import List from "./Pages/List";
import Navbar from "./Pages/Navbar";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
