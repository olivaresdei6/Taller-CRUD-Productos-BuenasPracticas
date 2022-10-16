import './App.css';
import Header from "./components/Header";
import {useState} from "react";
import Form from "./components/Form";

function App() {
    // Se crea un estado para el formulario de registro de productos
    const [formRegistration, setFormRegistration] = useState(false);
    return (
        <div className="App">
            <Header
                setFormRegistration={setFormRegistration}
            />
            <Form
                formRegistration={formRegistration}
            />
        </div>
    );
}

export default App;
