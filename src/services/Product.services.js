import { collection, addDoc } from "firebase/firestore";
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