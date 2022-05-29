import "./App.css";
import { FooterComponent } from "./component/FooterComponent";
import HeaderComponent from "./component/HeaderComponent";
import ListEmployeeComponent from "./component/ListEmployeeComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddEmployeeComponent from "./component/AddEmployeeComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" component={ListEmployeeComponent} exact></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route path="/add-employee" component={AddEmployeeComponent}></Route>
            <Route path = "/edit-employee/:id" component = {AddEmployeeComponent}></Route>
          </Switch>
        </div>

        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
