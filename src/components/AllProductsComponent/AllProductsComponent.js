import React from "react";
import "./AllProductsComponent.css";
import { useState, useEffect } from "react";

export default function AllProductsComponent(props) {
    const [items, setItems] = useState([]);
    function FetchData() {
        fetch(props.fetchLink)
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
                console.log(data)
            });
    }
    useEffect(() => {
        FetchData();
    }, [props.fetchLink]);
    return (
        <section className="AllProductsComponent">
            {items.map((item) => {
                return (
                    <div className="ProductCard" key={item.id}>
                        <img
                            src={item.image}
                            alt={item.title}
                            className="ProductCardImage"
                        />
                        <div className="ProductCardText">
                            <p>{item.title}</p>
                            <p>Price:{item.price}</p>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
