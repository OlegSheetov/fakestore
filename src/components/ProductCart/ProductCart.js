import { React, useRef } from "react";
import "./ProductCart.css";

export default function ProductCart(props) {
    const ProductCardWindowRef = useRef();
    function toggleProductCardWindow() {
        const CartWindow = ProductCardWindowRef.current;
        if (CartWindow.style.display == "block") {
            CartWindow.style.display = "none";
        } else {
            CartWindow.style.display = "block";
        }
    }
    let total = 0;
    props.ProductCard.forEach((item) => {
        total += item.price * item.count;
    });
    return (
        <div className="ProductCart">
            <p className="ProductCartButton" onClick={toggleProductCardWindow}>
                Cart({props.ProductCard.length})
            </p>
            <div className="ProductCardWindow" ref={ProductCardWindowRef}>
                <p>Total: {total.toFixed(1)}</p>
                {props.ProductCard.map((item) => {
                    return (
                        <div className="ProductCardItem" key={item.id}>
                            <p>{item.title}</p>
                            <div>
                                <input
                                    type="button"
                                    value="-"
                                    onClick={() => {
                                        props.DecrementProductInCard(item.id);
                                    }}
                                />
                                <input
                                    type="number"
                                    min="0"
                                    value={item.count}
                                    disabled
                                />
                                <input
                                    type="button"
                                    value="+"
                                    onClick={() => {
                                        props.IncrementProductInCard(item.id);
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
