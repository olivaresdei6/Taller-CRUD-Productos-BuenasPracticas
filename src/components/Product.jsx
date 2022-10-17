import React from 'react';
import {deleteProduct} from "../services/Product.services";

const Product = ({product, setModeEdition, setProductEdit, listProducts, setProductList, setFormRegistration}) => {
    const updateProduct = () => {
        setFormRegistration(false);
        setModeEdition(true);
        setProductEdit(product);
    }
    const deleteProd = async () => {
        const id = product.id;
        try {
            // Se llama al servicio de eliminación de productos
            await deleteProduct(id);
            // Se crea una copia del arreglo de productos
            const newProductList = listProducts.filter( prod => prod.id !== id);
            // Se actualiza el estado del listado de productos
            setProductList(newProductList);
        }catch (e) {
            console.log(e);
        }

    }


    return (
        <div className="card mb-3 max-auto rounded-4" style={{maxWidth: '300px'}}>
            <div className="row col-md-auto">
                <div>
                    <img src={product.urlImg} className="img-fluid" style={{borderTopLeftRadius:'16px', borderTopRightRadius: '16px', width: '100%', maxHeight: '320px'}} alt="..."/>
                </div>

                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.nameProduct}</h5>
                        <p className="card-text">{product.descriptionProduct}</p>
                        <p className="card-text"><small className="text-muted">Precio: {product.priceProduct}</small></p>
                        <p className="card-text"><small className="text-muted">Stock: {product.stockProduct}</small></p>
                        <p className="card-text"><small className="text-muted">Categoria: {product.categoryProduct}</small></p>
                        <p className="card-text"><small className="text-muted">Estado: {product.statusProduct}</small></p>
                        {/* Se colocan los botones de editar y eliminar. Cada botón esta debajo del otro y ocupan todo el ancho de la card */}
                        <div className="d-flex flex-column align-items-center mt-5 " style={{width:'260px'}}>
                            <button className="btn btn-warning rounded-5 p-2 mb-2" style={{width: '230px'}} onClick={()=> updateProduct()}>Editar</button>
                            <button className="btn btn-danger rounded-5 p-2" style={{width: '230px'}} onClick={()=>deleteProd()}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;