import React from "react"; 
import { render } from "react-dom";
import { Router, Link } from "@reach/router";

const Aplicacion = () =>(
    <div>
        <h1>Manejo de rutas en React</h1>
        <nav>
            <Link to="/">Inicio</Link>{" "}
            <Link to="SobreNosotros">Sobre nosotros</Link>
        </nav>

        <Router>
            <Inicio path="/" />
            <SobreNosotros path="/SobreNosotros" />
        </Router>

    </div>
);


const Inicio = () => (
    <div>
        <h2>Estás en inicio</h2>
    </div>
);

const SobreNosotros = () => (
    <div>
        <h2>Estás en Sobre Nosotros</h2>
    </div>
);

render(<Aplicacion/>, document.getElementById("root"));