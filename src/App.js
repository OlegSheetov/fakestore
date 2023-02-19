import React, { Component } from "react";
import "./App.css";
import { HashRouter, Link, Routes, Route } from "react-router-dom";
import AllProductsComponent from "./components/AllProductsComponent/AllProductsComponent";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import RegistrationScreen from './components/RegistrationScreen/RegistrationScreen'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { categories: 0 };
        //fetch("https://fakestoreapi.com/products/categories")
        //.then((res) => res.json())
        //.then((data) => {
        //console.log(data);
        //});
    }
    render() {
        return (
            <HashRouter>
                <div className="App">
                    <div className="topbar">
                        <Link to='/' className="logo">Fake shop</Link>
                        <div className="Navbar">
                            <p className="NavBarCategories"> Categories</p>
                            <p className="NavBarCart">Cart</p>
                            <Link to="/Login" className="NavBarSign-in">
                                Sign in
                            </Link>
                        </div>
                    </div>
                        <Routes>
                            <Route
                                path="/"
                                element={<AllProductsComponent />}
                            ></Route>
                            <Route
                                path="/Login"
                                element={<LoginScreen />}
                            ></Route>
                            <Route path='/Register' element={<RegistrationScreen/>}></Route>
                        </Routes>
                </div>
            </HashRouter>
        );
    }
}

export default App;
