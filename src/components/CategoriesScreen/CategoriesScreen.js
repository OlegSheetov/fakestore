import React from "react";
import "./CategoriesScreen.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function CategoriesScreen() {
    let [CategoriesState, setCategoriesState] = useState([]);
    const Navigate = useNavigate();
    useEffect(() => {
        const CategoriesFetch = fetch(
            "https://fakestoreapi.com/products/categories"
        )
            .then((res) => res.json())
            .then((json) => {
                setCategoriesState(json);
            });
    }, []);
    return (
        <section className="CategoriesScreen">
            {CategoriesState.map((item) => {
                return (
                    <div
                        className="CategoriesScreenCategory"
                        key={item}
                        onClick={() => {
                            console.log(`<${item}/>`)
                            Navigate(`/${item}`)
                        }}
                    >
                        {item}
                    </div>
                );
            })}
        </section>
    );
}
