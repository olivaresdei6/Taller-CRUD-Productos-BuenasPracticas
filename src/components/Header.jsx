import Form from "./Form";

const Header = ({setFormRegistration, setModeEdition }) => {

    return (
        <div className="container">
            <h1 className="text-center">Productos</h1>
            <hr/>
            <button
                className="btn btn-primary rounded-5 "
                onClick={() => {
                    setFormRegistration(true);
                    setModeEdition(false);
                }}
                style={{ padding: '12px 60px',marginRight: '10px'   }}
            >Agregar Producto
            </button>
            <hr/>
        </div>
    );
};

export default Header;