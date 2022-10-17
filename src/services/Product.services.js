import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";

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

export const updateProduct = async (product) => {
    try {
        // Se extrae la imagen del producto a través de la API de picsum
        const urlImg = await fetch('https://picsum.photos/200/300');
        const productDb = { ...product, urlImg: urlImg.url };
        // Se guarda el objeto en la base de datos
        const data = await updateDoc(doc(db, 'productos', product.id), productDb);
        console.log(data);
        return productDb
    }catch (e) {
        console.log(e);
    }
}

export const deleteProduct = async (id) => {
    try {
        await deleteDoc(doc(db, 'productos', id));
    }catch (e) {
        console.log(e);
    }
}