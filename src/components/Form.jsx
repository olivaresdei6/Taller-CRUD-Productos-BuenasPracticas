import {useEffect, useState} from "react";
import {saveProduct, updateProduct} from "../services/Product.services";

const Form = ( { formRegistration, setFormRegistration, listProducts, setProductList, modeEdition, setModeEdition, productEdit, setProductEdit } ) => {
    const [nameProduct, setProductName] = useState('');
    const [descriptionProduct, setDescriptionProduct] = useState('');
    const [priceProduct, setPriceProduct] = useState('');
    const [stockProduct, setStockProduct] = useState('');
    const [categoryProduct, setCategoryProduct] = useState('');
    const [urlImg, setUrlImg] = useState('');
    const [statusProduct, setStateProduct] = useState('');

    // Se crea un estado para el id del producto a editar
    const [idProduct, setIdProduct] = useState('');

    const changeModeEdition = () => {
        console.log('changeModeEdition', productEdit);
        const {nameProduct, descriptionProduct, priceProduct, stockProduct, categoryProduct, urlImg, statusProduct, id} = productEdit;
        setProductName(nameProduct);
        setDescriptionProduct(descriptionProduct);
        setPriceProduct(priceProduct);
        setStockProduct(stockProduct);
        setCategoryProduct(categoryProduct);
        setUrlImg(urlImg);
        setStateProduct(statusProduct);
        setIdProduct(id);
    }
    
    // Se crea un useEffect para cambiar el estado de modo de edición
    useEffect(() => {
        if(productEdit!==null){
            changeModeEdition();
        }
    }, []);

    const generateObjectProduct = () => {
        return { nameProduct, descriptionProduct, priceProduct, stockProduct, categoryProduct, statusProduct, id: idProduct }
    }

    const save = async (e)=> {
        e.preventDefault();
        const data = generateObjectProduct();
        const productDB = await saveProduct(data);
        setProductList([...listProducts, productDB]);
        setFormRegistration(false);
    }

    const edit = async (e)=> {
        e.preventDefault();
        // Se crea un objeto con los datos del producto a editar. Estos datos se obtienen del estado
        // de los inputs
        const data = generateObjectProduct()
        console.log('data', data);
        // Se llama al servicio de actualización de productos
        const productDB = await updateProduct(data);
        // Se crea una copia del arreglo de productos
        const newProductList = listProducts.map( prod => (
            // Se verifica si el id del producto es igual al id del producto a editar. Si es así, se actualiza el producto
            // Si no es así, se retorna el producto sin modificar
            prod.id === productDB.id ? { ...productDB, id:productDB.id }: prod
        ));
        // Se actualiza el estado del listado de productos
        setProductList(newProductList);
        // Se actualiza el estado del modo de edición y se limpian los estados de los inputs
        clean();
    }

    const cancel = () => {
        clean();
        setFormRegistration(false);
    }

    const clean = () => {
        setProductName('');
        setDescriptionProduct('');
        setPriceProduct('');
        setStockProduct('');
        setCategoryProduct('');
        setUrlImg('');
        setModeEdition(false);
        setProductEdit(null);
    }

    return (
        <div className="row">
                <div className="col-md-12">
                    <h3 className="text-center">
                        {
                            modeEdition ? 'Editar Producto' : 'Agregar Producto'
                        }
                    </h3>
                    <form onSubmit={ modeEdition ? edit : save }>
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Ingrese el nombre del producto"
                            onChange={(e) => setProductName(e.target.value)}
                            value={nameProduct}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Ingrese la descripción del producto"
                            onChange={(e) => setDescriptionProduct(e.target.value)}
                            value={descriptionProduct}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Ingrese el precio del producto"
                            onChange={(e) => setPriceProduct(e.target.value)}
                            value={priceProduct}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Ingrese el stock del producto"
                            onChange={(e) => setStockProduct(e.target.value)}
                            value={stockProduct}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Ingrese la categoría del producto"
                            onChange={(e) => setCategoryProduct(e.target.value)}
                            value={categoryProduct}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Ingrese el estado del producto"
                            onChange={(e) => setStateProduct(e.target.value)}
                            value={statusProduct}
                        />
                        <div className="d-flex justify-content-center mt-4">
                            <button
                                className="btn btn-dark btn-block rounded-5"
                                type="submit"
                                style={{ padding: '12px 60px',marginRight: '10px'   }}
                            >
                                { modeEdition ? 'Editar' : 'Agregar'}
                            </button>
                            <button
                                className="btn btn-danger btn-block rounded-5"
                                style={{ padding: '12px 60px' }}
                                /* ¿Cómo se cancela y limpia el formulario sin recargar la página? */
                                onClick={cancel}
                                type="submit"
                            >Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default Form;