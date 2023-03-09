import React, { Component } from "react";
import "./App.css";
import { HashRouter, Link, Routes, Route } from "react-router-dom";
import AllProductsComponent from "./components/AllProductsComponent/AllProductsComponent";
import RegistrationScreen from "./components/RegistrationScreen/RegistrationScreen";
import ProductCart from "./components/ProductCart/ProductCart";
import ProductDetail from "./components/ProductDetail/ProductDetail";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            fetchLink: "https://fakestoreapi.com/products",
            ProductCard: [],
        };
        this.AddToCard = this.AddToCard.bind(this);
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
    AddToCard(product) {
        //this.state.ProductCard.push(product)
        product.count = 1;
        let Cart = [...this.state.ProductCard];
        Cart.push(product);
        this.setState({ ProductCard: Cart });
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
                        <ProductCart ProductCard ={this.state.ProductCard}/>
                        </div>
                    </div>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <AllProductsComponent
                                    fetchLink={this.state.fetchLink}
                                    AddToCard={this.AddToCard}
                                />
                            }
                        ></Route>
                        <Route
                            path="/Register"
                            element={<RegistrationScreen />}
                        ></Route>
                        <Route
                            path="/:Key"
                            element={
                                <ProductDetail AddToCard={this.AddToCard} />
                            }
                        ></Route>
                    </Routes>
                </div>
            </HashRouter>
        );
    }
}

export default App;
