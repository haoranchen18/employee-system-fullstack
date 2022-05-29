import "./App.css";
import { FooterComponent } from "./component/FooterComponent";
import HeaderComponent from "./component/HeaderComponent";
import ListEmployeeComponent from "./component/ListEmployeeComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" component={ListEmployeeComponent} exact></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
          </Switch>
        </div>

        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
