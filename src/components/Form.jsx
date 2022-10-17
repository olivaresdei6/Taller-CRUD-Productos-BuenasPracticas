import {useEffect, useState} from "react";
import {saveProduct} from "../services/Product.services";

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
        if(productEdit){
            changeModeEdition();
        }
    }, [changeModeEdition, productEdit]);

    const generateObjectProduct = () => {
        return { nameProduct, descriptionProduct, priceProduct, stockProduct, categoryProduct, statusProduct }
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
        const data = generateObjectProduct()
        const productDB = await saveProduct(data);
        console.log(productDB);
        setProductList([...listProducts, productDB]);
        setFormRegistration(false);
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