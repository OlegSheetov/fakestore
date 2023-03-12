import { React, useEffect, useState } from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";

export default function ProductDetail(props) {
    let { Key } = useParams();
    let [ProductInfo, setProductInfo] = useState({});
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${Key}`)
            .then((res) => res.json())
            .then((json) => {
                setProductInfo(json);
            });
    }, []);

    return (
        <div className="ProductDetail">
            <img
                className="ProductDetailImg"
                src={ProductInfo.image}
                alt="image"
            />
            <div className="ProductInformation">
                <div className="ProductInformationTitle">
                    <h3>Name:</h3>
                    <p>{ProductInfo.title}</p>
                </div>
                <div className="ProductInformationDescription">
                    <h4>Description:</h4>
                    <p>{ProductInfo.description}</p>
                </div>
                <p className="ProductInformationPrice">${ProductInfo.price}</p>
                <input type="button" value="add to cart" onClick={(e)=>{props.AddToCard(ProductInfo)}}/>
                <input type="button" value='checkProcductCart' onClick={(e)=>{ props.CheckProductCard(ProductInfo) }} />
            </div>
        </div>
    );
}
