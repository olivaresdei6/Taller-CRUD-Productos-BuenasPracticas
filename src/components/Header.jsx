import Form from "./Form";

const Header = ({setFormRegistration, formRegistration, listProducts, setProductList}) => {

    return (
        <div className="container">
            <h1 className="text-center">Productos</h1>
            <hr/>
            <button
                className="btn btn-primary rounded-5 "
                onClick={() => setFormRegistration(true)}
                style={{ padding: '12px 60px',marginRight: '10px'   }}
            >Agregar Producto
            </button>
            <hr/>
            {
                formRegistration ?? (
                    <Form
                        setFormRegistration={setFormRegistration}
                        listProducts={listProducts}
                        setProductList={setProductList}
                    />
                )
            }
        </div>
    );
};

export default Header;