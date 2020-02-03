import React, { Component } from 'react';
import Tabla from './Tabla';
import TablaComponenetesSimples from './TablaComponentesSimples';
import TablaComponentesSimplesProps from "./tablaComponentesSimplesProps";
import TablaComponentesSimplesState from "./tablaComponentesSimplesState.js";
//import Personajes from "./personajes.json";
import Formulario from './Formulario'

class App extends Component {

    /*Utilizo un fichero json con los datos de personajes*/
    // state = {personajes}

    /*Dejo la coleccion vacia para utilizarla mediante un formulario*/

    state = { personajes: [] }

    /*Metodo para manejar los datos para el formulario*/

    manejarEnvio = personaje => {
         this.setState({ personajes: [...this.state.personajes, personaje] }); 
        }

    /** Objeto para utilizar en state  relleno personajes*/
    /* state = {
         personajes: [
             {
                 name: "Payton Hobart"
             },
             {
                 name: "Wendy Carr"
             },
             {
                 name: "Mina"
             },
             {
                 name: "Drácula"
             },
             {
                 name: "Once"
             },
             {
                 name: "Jim Hopper"
             }
         ]
     }*/

    /** Método para borrar personajes */
    borrarPersonaje = indice => {
        const { personajes } = this.state;
        this.setState({
            personajes: personajes.filter((personaje, i) => {
                return i !== indice;
                /** Devuelve todas las que no tiene que borar??*/
            })
        });
    }


    render() {
        /** Colocacion de objetos con nomenclatura json para utilizar con props */
        const actoresactrices = [
            {
                nombre: "Joel",
                apellidos: "Edgtron"
            },
            {
                nombre: "Carmen",
                apellidos: "Maura"
            },
            {
                nombre: "Luis",
                apellidos: "Tosar"
            },
            {
                nombre: "Chloe",
                apellidos: "Grace Moretz"
            }
        ]
        const { personajes } = this.state
        /** Para utulizar el state */




        return (
            <div className='App'>
                <h1>¡Funciona!</h1>
                <h1>Tabla creada mediante un componente de clase que no utiliza componentes simples</h1>
                <Tabla />
                <h2>Tabla creada mediante un componente de clase que utiliza componentes simples</h2>
                <TablaComponenetesSimples />
                <h2>Tabla creada mediante un componente de clase que utiliza clase de parametros con props</h2>
                <TablaComponentesSimplesProps datosActoresActrices={actoresactrices} />
                <h2>Tabla creada mediante componentes simples (con state y que permite borrar elementos), que utiliza dos elementos simples</h2>
                <TablaComponentesSimplesState datosPersonajes={personajes} borrarPersonaje={this.borrarPersonaje} />
                <h2>Añadir nuevo</h2> 
                <Formulario manejarEnvio={this.manejarEnvio} />

            </div>
        )
    }
}

export default App;