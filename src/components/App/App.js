import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InputForm from "../InputForm/InputForm";
import Repos from "../Repos/Repos";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <h1>Github Issue Tracker</h1>
            </header>
            <Router>
                <Switch>
                    <Route exact path="/" component={InputForm}></Route>
                    <Route path="/repos" component={Repos} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
