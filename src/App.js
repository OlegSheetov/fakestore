import React, { Component } from "react";
import "./App.css";
import { HashRouter, Link, Routes, Route } from "react-router-dom";
import AllProductsComponent from "./components/AllProductsComponent/AllProductsComponent";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import RegistrationScreen from "./components/RegistrationScreen/RegistrationScreen";
import CategoriesScreen from "./components/CategoriesScreen/CategoriesScreen";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            fetchLink: "https://fakestoreapi.com/products",
        };
    }
    componentDidMount() {
        const fetchCategories = fetch(
            "https://fakestoreapi.com/products/categories"
        )
            .then((res) => res.json())
            .then((json) => {
                this.setState({ categories: json });
            });
    }
    render() {
        return (
            <HashRouter>
                <div className="App">
                    <div className="topbar">
                        <Link
                            to="/"
                            className="logo"
                            onClick={() => {
                                this.setState({
                                    fetchLink: `https://fakestoreapi.com/products`,
                                });
                            }}
                        >
                            Fake shop
                        </Link>
                        <div className="Navbar">
                            <div className="NavBarCategories">
                                <p>Categories</p>
                                <div>
                                    <p
                                        onClick={() => {
                                            this.setState({
                                                fetchLink:
                                                    "https://fakestoreapi.com/products",
                                            });
                                        }}
                                    >
                                        All
                                    </p>
                                    {this.state.categories.map((item) => {
                                        return (
                                            <p
                                                key={item}
                                                onClick={() => {
                                                    this.setState({
                                                        fetchLink: `https://fakestoreapi.com/products/category/${item}`,
                                                    });
                                                }}
                                            >
                                                {item}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                            <Link to="/Login" className="NavBarSign-in">
                                Sign in
                            </Link>
                        </div>
                    </div>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <AllProductsComponent
                                    fetchLink={this.state.fetchLink}
                                />
                            }
                        ></Route>
                        <Route path="/Login" element={<LoginScreen />}></Route>
                        <Route
                            path="/Register"
                            element={<RegistrationScreen />}
                        ></Route>
                        <Route
                            path="/Categories"
                            element={<CategoriesScreen />}
                        ></Route>
                    </Routes>
                </div>
            </HashRouter>
        );
    }
}

export default App;
