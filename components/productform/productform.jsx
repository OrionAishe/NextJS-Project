import styles from "./productform.module.scss";

const ProductForm = ({name, price, type, image, onClick}) => {

    return <form className={styles.Productform} onSubmit={onClick}>
        <label>Nome do Produto:</label>
        <input ref={name} type="text" />
        <label>Preço:</label>
        <input ref={price} type="text" />
        <label>Tipo de Venda:</label>
        <select ref={type} name="type">
            <option value="cada">A Unidade</option>
            <option value="a caixa">A Caixa</option>
        </select>
        <label>Imagem:</label>
        <input ref={image} type="url" />
        <button>Submit</button>
    </form>
}

export default ProductForm;