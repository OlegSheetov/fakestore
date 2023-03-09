import { React, useRef } from "react";
import "./ProductCart.css";

export default function ProductCart(props) {
    const ProductCardWindowRef = useRef();
    function toggleProductCardWindow() {
        const CartWindow = ProductCardWindowRef.current
        if(props.ProductCard.length == 0) { 
            CartWindow.style.display = 'none'
        }
        if( CartWindow.style.display == 'block' ) { 
            CartWindow.style.display = 'none'
        }
        
        else{ 
            CartWindow.style.display = 'block'
        }
    }
    return (
        <div className="ProductCart" >
            <p className="ProductCartButton" onClick={toggleProductCardWindow}>
                Cart({props.ProductCard.length})
            </p>
            <div className="ProductCardWindow" ref={ProductCardWindowRef} >
                {props.ProductCard.map((item) => {
                    return (
                        <div
                            className="ProductCardItem"
                            key={item.id}
                        >
                            <p>{item.title}</p>
                            <div>
                                <input type="button" value="-" />
                                <input
                                    type="number"
                                    defaultValue={item.count}
                                />
                                <input type="button" value="+" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
