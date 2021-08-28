import "./app.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import ApiKeyInput from "./components/ApiKeyInput";
import GithubIssues from "./components/GithubIssues";

function App() {
    return (
        <div className="app">
            <header className="app-header">Github Issue Tracker</header>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/authorize" />
                    </Route>
                    <Route path="/authorize" component={ApiKeyInput} />
                    <Route path="/issues" component={GithubIssues} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
