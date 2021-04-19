import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Form from "./components/Forms/Form";
import Register from "./components/Forms/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/register" component={Register} />
          <Route path="/form" component={Form} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
