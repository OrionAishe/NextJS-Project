import styles from "./products.module.scss";

const Products = ({product}) => {
    return <li className={styles.Product}>
        <p className={styles.Product__Name}>{product.name}</p>
        <img
        className={styles.Product__Image}
        src={product.image} />
        <p className={styles.Product__Price}>R${product.price} {product.vendingType}</p>
    </li>
}

export default Products;