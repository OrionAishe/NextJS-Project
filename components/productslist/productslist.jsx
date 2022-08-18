import Products from "./products";

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
    }
];

const ProductsList = () => {
    return <>
    <h1>Products</h1>
    <ul>
        {products.map((item) => {
            return <Products key={item.id} product={item} />
        })}
    </ul>
    </>
}

export default ProductsList;