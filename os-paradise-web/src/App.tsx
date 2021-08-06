import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import { Error, Home, Members } from "./Pages";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/members" component={Members} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
