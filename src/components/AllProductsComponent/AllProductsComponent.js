import React from "react";
import "./AllProductsComponent.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AllProductsComponent(props) {
    const [items, setItems] = useState([]);
    function FetchData() {
        fetch(props.fetchLink)
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            });
    }
    useEffect(() => {
        FetchData();
    }, [props.fetchLink]);
    return (
        <section className="AllProductsComponent">
            {items.map((item) => {
                return (
                    <Link to={`/${item.id}`} key={item.id} className="Link">
                        <div className="ProductCard">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="ProductCardImage"
                            />
                            <div className="ProductCardText">
                                <p className="ProductCardTextTitle">
                                    {item.title}
                                </p>
                                <p className="ProductCardTextPrice">
                                    $ {item.price}
                                </p>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </section>
    );
}
