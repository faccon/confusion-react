import logo from "./logo.svg";
import "./App.css";
import MenuComponent from "./components/MenuComponent";
import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "./components/shared/dishes";
import { useState } from "react";

function App() {
  const [Dishes, setDishes] = useState({ DISHES });
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="#">
            Ristorante Con Fusion
          </NavbarBrand>
        </div>
      </Navbar>
      <MenuComponent dishes={DISHES} />
    </div>
  );
}

export default App;
