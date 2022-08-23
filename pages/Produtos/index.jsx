import { useRef, useState } from "react";
import path from "path";
import fs from "fs/promises";
import ProductsList from "../../components/productslist/productslist";
import SearchBar from "../../components/productslist/searchbar";
import styles from "./styles.module.scss";

const ProductPage = (props) => {
    const Search = useRef();
    const [Filter, setFilter] = useState(null);

    const SearchHandler = () => {
        setFilter(Search.current.value.toString().toLowerCase());
    }

    return <div className={styles.ProductPage}>
        <SearchBar useref={Search} onClick={SearchHandler} />
        <ProductsList data={props.products} filter={Filter} />
    </div>
}

export async function getStaticProps() {
    const filepath = path.join(process.cwd(), "data", "data.json");
    const data = JSON.parse(await fs.readFile(filepath));
    

    return {
        props: {
            products: data
        }
    }
}

export default ProductPage;