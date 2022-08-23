import path from 'path';
import fs from 'fs/promises';
import ProductsList from "../components/productslist/productslist"

export default function Home(props) {
  return (
  <ProductsList data={props.products}></ProductsList>
)}

export async function getStaticProps() {
  const filepath = path.join(process.cwd(), "data", "data.json");
  const data = JSON.parse(await fs.readFile(filepath));
  

  return {
      props: {
          products: data
      }
  }
}