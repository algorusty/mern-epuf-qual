import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import EpufList from "./components/list.component";
import EditEpuf from "./components/edit-epuf.component";
import CreateEpuf from "./components/create-epuf.component";
import CreateEpufID from "./components/create-epufID.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={EpufList}></Route>
        <Route path="/edit/:id" component={EditEpuf}></Route>
        <Route path="/create" component={CreateEpuf}></Route>
        <Route path="/epuf" component={CreateEpufID}></Route>
      </div>
    </Router>
  );
}

export default App;
