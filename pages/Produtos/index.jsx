import { useRef, useState } from "react";
import ProductsList from "../../components/productslist/productslist";
import SearchBar from "../../components/productslist/searchbar";

const ProductPage = () =>{
    const Search = useRef();
    const [Filter, setFilter] = useState(null);

    const SearchHandler = () => {
        setFilter(Search.current.value.toString().toLowerCase());
    }

    return <>
    <SearchBar useref={Search} onClick={SearchHandler} />
    <ProductsList filter={Filter} />
    </>
}

export default ProductPage;