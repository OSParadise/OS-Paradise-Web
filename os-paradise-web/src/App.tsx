import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Members from "./Pages/Members";

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
