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
        this.checkThatProductInCart = this.checkThatProductInCart.bind(this);
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
        if (this.state.ProductCard.includes(product)) {
            let Cart = [...this.state.ProductCard];
            const ProductIndex = Cart.indexOf(product);
            // Проверка - есть ли у продукта в корзине счетчик 
            // Если его нет - добавить 
            // Если есть - прибавить один.
            Cart[ProductIndex].count
                ? (Cart[ProductIndex].count += 1)
                : (Cart[ProductIndex].count = 1);
            this.setState({ ProductCard: Cart });
        } else {
            let Cart = [...this.state.ProductCard];
            Cart.push(product);
            this.setState({ ProductCard: Cart });
        }
    }
    checkThatProductInCart(product) {
        let Cart = this.state.ProductCard;
        if (Cart.includes(product)) {
            console.log("Includes.");
        } else {
            console.log("Not includes.");
        }
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
                            <ProductCart ProductCard={this.state.ProductCard} />
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
                        <Route
                            path="/Register"
                            element={<RegistrationScreen />}
                        ></Route>
                        <Route
                            path="/:Key"
                            element={
                                <ProductDetail
                                    AddToCard={this.AddToCard}
                                    CheckProductCard={
                                        this.checkThatProductInCart
                                    }
                                />
                            }
                        ></Route>
                    </Routes>
                </div>
            </HashRouter>
        );
    }
}

export default App;
