import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const App = () => (
 <Router>
  <div>
      <Nav />
      <Switch>
        <Route exact path="/books/:id" component={Detail} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/" compontent={Books} />
        <Route component={NoMatch} />
      </Switch>
      <Books />
  </div>
</Router>
);





export default App;
