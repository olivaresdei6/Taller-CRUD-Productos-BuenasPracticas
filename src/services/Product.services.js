import { collection, addDoc, getDocs } from "firebase/firestore";
import db from "../db/firebase";
export const saveProduct = async (product) => {
    try {
        // Se extrae la imagen del producto a través de la API de picsum
        const urlImg = await fetch('https://picsum.photos/200/300');
        const productDb = { ...product, urlImg: urlImg.url };
        // Se guarda el objeto en la base de datos
        await addDoc(collection(db, 'productos'), productDb);
        return productDb
    }catch (e) {
        console.log(e);
    }
}

export const getProducts = async () => {
    try {
        const products = await getDocs(collection(db, 'productos'));
        return products.docs.map(product =>( {...product.data(), id: product.id}));

    }catch (e) {
        console.log(e);
    }
}