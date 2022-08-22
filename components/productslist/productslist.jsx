import Products from "./products";
import styles from "./productslist.module.scss";

let products = [
    {
        "id":"p1",
        "name":"batata",
        "price":"7.99",
        "image":"https://static1.conquistesuavida.com.br/ingredients/5/54/52/05/@/24682--ingredient_detail_ingredient-2.png",
        "vendingType":"KG"
    },
    {
        "id":"p2",
        "name":"batata",
        "price":"7.99",
        "image":"https://static1.conquistesuavida.com.br/ingredients/5/54/52/05/@/24682--ingredient_detail_ingredient-2.png",
        "vendingType":"KG"
    },
    {
        "id":"p3",
        "name":"batata",
        "price":"7.99",
        "image":"https://static1.conquistesuavida.com.br/ingredients/5/54/52/05/@/24682--ingredient_detail_ingredient-2.png",
        "vendingType":"KG"
    },
    {
        "id":"p4",
        "name":"batata",
        "price":"7.99",
        "image":"https://static1.conquistesuavida.com.br/ingredients/5/54/52/05/@/24682--ingredient_detail_ingredient-2.png",
        "vendingType":"KG"
    },
    {
        "id":"p5",
        "name":"batata",
        "price":"7.99",
        "image":"https://static1.conquistesuavida.com.br/ingredients/5/54/52/05/@/24682--ingredient_detail_ingredient-2.png",
        "vendingType":"KG"
    }
];

const ProductsList = ({filter}) => {
    return <>
    <h1 className={styles.ProductsList__Title}>Produtos</h1>
    <ul className={styles.ProductsList}>
        {filter != null ? products.filter((item) => {
            return item.name.includes(filter); 
        }).map((item) => {
            return <Products key={item.id} product={item} />
        }): products.map((item) => {
            return <Products key={item.id} product={item} />
        })}
    </ul>
    </>
}

export default ProductsList;