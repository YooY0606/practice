import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Router>
        <div style={{ display: "flex" }}>
          <div style={{ padding: "10px", width: "40%", background: "#f0f0f0" }}>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link to="/">長庚大學</Link>
              </li>
              <li>
                <Link to="/資訊工程系">資訊⼯程系</Link>
              </li>
              <li>
                <Link to="/⼈工智慧系">人工智慧系</Link>
              </li>
            </ul>
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            <Switch>
              <Route exact path="/">
                <h1>長庚大學</h1>
              </Route>
              <Route path="/資訊工程系">
                <h1>資訊⼯程系</h1>
              </Route>
              <Route path="/⼈工智慧系">
                <h1>人工智慧系</h1>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}
