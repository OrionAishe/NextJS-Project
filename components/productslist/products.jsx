import styles from "./products.module.scss";

const Products = ({product}) => {
    return <li className={styles.Product}>
        <img
        className={styles.Product__Image}
        src={product.image} />
        <p className={styles.Product__Name}>{product.name}</p>
        <p className={styles.Product__Price}>R${product.price} {product.vendingtype}</p>
    </li>
}

export default Products;