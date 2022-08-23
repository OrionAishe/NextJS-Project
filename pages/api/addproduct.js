import path from 'path';
import fs from 'fs/promises';

async function handler (req, res) {
    if(req.method === "POST"){
        const product = {
            id: new Date().toISOString(),
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            vendingtype: req.body.type
        }
    
    const filepath = path.join(process.cwd(), "data", "data.json");
    const data = JSON.parse(await fs.readFile(filepath));
    data.push(product);
    await fs.writeFile(filepath, JSON.stringify(data));
    res.status(201).json({ message: "Produto Adicionado"})
    }
    else {
        res.status(200).json({ message: "Not a POST Request"})
    }
}

export default handler;