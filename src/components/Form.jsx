import React from 'react';


const Form = ({formRegistration, modoEdicion}) => {
    return (
        <div className="container">
            {
                /* El formulario no se debe mostrar al final de la pagina, si no debajo del producto a modificar o en la parte superior si se va a agregar uno nuevo */
                formRegistration ? (
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="text-center">
                                {
                                    modoEdicion ? 'Editar Producto' : 'Agregar Producto'
                                }
                            </h3>
                            <form>
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Ingrese el nombre del producto"
                                />
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Ingrese la descripción del producto"
                                />
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Ingrese el precio del producto"
                                />
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Ingrese el stock del producto"
                                />
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Ingrese la categoría del producto"
                                />
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Ingrese el estado del producto"
                                />
                                <div className="d-flex justify-content-center mt-4">
                                    <button
                                        className="btn btn-dark btn-block rounded-5"
                                        type="submit"
                                        style={{ padding: '12px 60px',marginRight: '10px'   }}
                                    >
                                        { modoEdicion ? 'Editar' : 'Agregar'}
                                    </button>
                                    <button
                                        className="btn btn-danger btn-block rounded-5"
                                        style={{ padding: '12px 60px' }}
                                    >Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h1>No hay productos</h1>
                    </div>
                )
            }
        </div>
    );
};

export default Form;