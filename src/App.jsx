import './App.css';
import Header from "./components/Header";
import {useState} from "react";
import Form from "./components/Form";

function App() {
    // Se crea un estado para el formulario de registro de productos
    const [formRegistration, setFormRegistration] = useState(false);
    // Se crea un estado para el listado de productos
    const [listProducts, setProductList] = useState([]);
    return (
        <div className="App">
            <Header
                setFormRegistration={setFormRegistration}
                formRegistration={formRegistration}
                listProducts={listProducts}
                setProductList={setProductList}
            />

        </div>
    );
}

export default App;
