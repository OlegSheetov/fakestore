import { React, useRef } from "react";
import "./Search.css";

export default function Search(props) {
    const SearchRef = useRef();
    function search() {
        const SearchRequest = SearchRef.current.value.toLowerCase();
        let AllProducts = props.AllProducts;
        let SearchState = [];
        AllProducts.forEach((item) => {
            let ProductTitle = item.title.toLowerCase();
            if (ProductTitle.includes(SearchRequest)) {
                SearchState.push(item);
                props.StateforSearch(SearchState)
            } 
            if(SearchRequest == ''){ 
                props.StateforSearch(props.AllProductsBackup)
            }
        });
    }
    return (
        <div className="Search">
            <input
                type="search"
                placeholder="Search"
                autoComplete="off"
                ref={SearchRef}
                onChange={search}
            />
        </div>
    );
}
