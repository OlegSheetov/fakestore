import React, { Component } from "react";
import "./App.css";
import { HashRouter, Link, Routes, Route } from "react-router-dom";
import AllProductsComponent from "./components/AllProductsComponent/AllProductsComponent";
import ProductCart from "./components/ProductCart/ProductCart";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Search from "./components/Search/Search";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            fetchLink: "https://fakestoreapi.com/products",
            ProductCard: [],
            AllProducts: [],
            AllProductsBackup: [], 
        };
        this.AddToCard = this.AddToCard.bind(this);
        this.IncrementProductInCard = this.IncrementProductInCard.bind(this);
        this.DecrementProductInCard = this.DecrementProductInCard.bind(this);
        this.FetchAllProducts = this.FetchAllProducts.bind(this);
        this.StateforSearch = this.StateforSearch.bind(this);
    }
    FetchAllProducts() {
        const FetchAllProdcuts = fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => {
                this.setState({ AllProducts: json });
                this.setState({ AllProductsBackup: json })
            });
    }
    FetchProductsByCatergory(item) {
        const FetchAllProdcuts = fetch(
            `https://fakestoreapi.com/products/category/${item}`
        )
            .then((res) => res.json())
            .then((json) => {
                this.setState({ AllProducts: json });
            });
    }
    componentDidMount() {
        const fetchCategories = fetch(
            "https://fakestoreapi.com/products/categories"
        )
            .then((res) => res.json())
            .then((json) => {
                this.setState({ categories: json });
            });
        this.FetchAllProducts();
    }
    AddToCard(product) {
        if (!product.count) {
            product.count = 1;
        }
        let Cart = [...this.state.ProductCard];
        if (this.state.ProductCard.includes(product)) {
            const ProductIndex = Cart.indexOf(product);
            Cart[ProductIndex].count += 1;
            this.setState({ ProductCard: Cart });
        } else {
            Cart.push(product);
            this.setState({ ProductCard: Cart });
        }
    }
    IncrementProductInCard(productID) {
        let Cart = [...this.state.ProductCard];
        let CurrentProduct = Cart.find((el) => el.id === productID);
        CurrentProduct.count += 1;
        this.setState({ ProductCard: Cart });
    }
    DecrementProductInCard(productID) {
        let Cart = [...this.state.ProductCard];
        let CurrentProduct = Cart.find((el) => el.id === productID);
        CurrentProduct.count -= 1;
        if (CurrentProduct.count == 0) {
            const CurrentProductIndex = Cart.indexOf(CurrentProduct);
            Cart.splice(CurrentProductIndex, 1);
        }
        this.setState({ ProductCard: Cart });
    }
    StateforSearch(SearchResult) {
        this.setState({ AllProducts: SearchResult });

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
                                this.FetchAllProducts();
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
                                            this.FetchProductsByCatergory(item);
                                        }}
                                    >
                                        {item}
                                    </p>
                                );
                            })}
                            <ProductCart
                                ProductCard={this.state.ProductCard}
                                IncrementProductInCard={
                                    this.IncrementProductInCard
                                }
                                DecrementProductInCard={
                                    this.DecrementProductInCard
                                }
                            />
                            <Search
                                AllProducts={this.state.AllProducts}
                                AllProductsBackup={this.state.AllProductsBackup}
                                StateforSearch={this.StateforSearch}
                            />
                        </div>
                    </div>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <AllProductsComponent
                                    AllProducts={this.state.AllProducts}
                                />
                            }
                        ></Route>
                        <Route
                            path="/:Key"
                            element={
                                <ProductDetail
                                    AddToCard={this.AddToCard}
                                    AllProducts={this.state.AllProducts}
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
