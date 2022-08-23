import Products from "./products";
import styles from "./productslist.module.scss";

const ProductsList = ({data, filter}) => {
    return <>
    <h1 className={styles.ProductsList__Title}>Produtos</h1>
    <ul className={styles.ProductsList}>
        {filter != null ? data.filter((item) => {
            return item.name.includes(filter); 
        }).map((item) => {
            return <Products key={item.id} product={item} />
        }): data.map((item) => {
            return <Products key={item.id} product={item} />
        })}
    </ul>
    </>
}

export default ProductsList;