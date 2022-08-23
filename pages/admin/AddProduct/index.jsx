import { useRef } from "react";
import ProductForm from "../../../components/productform/productform";

const AddProductPage = () => {
    const name = useRef();
    const price = useRef();
    const type = useRef();
    const image = useRef();

    async function OnSubmitHandler(event) {
        event.preventDefault();

        const product = {
            name: name.current.value,
            price: price.current.value,
            type: type.current.value,
            image: image.current.value
        }

        const response = await fetch('/api/addproduct', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-type': 'application/json'
            }
        });
        console.log(response.ok);
    }
    return <ProductForm onClick={OnSubmitHandler} name={name} price={price} type={type} image={image} ></ProductForm>
}

export default AddProductPage;