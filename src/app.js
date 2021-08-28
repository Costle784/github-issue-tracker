import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ApiKeyInput from "./components/ApiKeyInput";
import GithubIssues from "./components/GithubIssues";

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <h1>Github Issue Tracker</h1>
            </header>
            <Router>
                <Switch>
                    <Route exact path="/" component={ApiKeyInput}></Route>
                    <Route path="/issues" component={GithubIssues} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
