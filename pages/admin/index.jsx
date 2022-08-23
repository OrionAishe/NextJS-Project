import Login from "../../components/login/login";
import Link from "next/link";

const AdminPage = () => {
    return <>
    <Link href={"admin/AddProduct"}>Add Product</Link>
    <Login></Login>
    </>
}

export default AdminPage;