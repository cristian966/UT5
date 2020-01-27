import React,{ Component } from 'react';
import Tabla from './Tabla';
import TablaComponenetesSimples from './TablaComponentesSimples';

class App extends Component{
    render(){
        return(
            <div className='App'>
                <h1>¡Funciona!</h1>
                <h1>Tabla creada mediante un componente de clase que no utiliza componentes simples</h1>
                <Tabla/>
                <h2>Tabla creada mediante un componente de clase que utiliza componentes simples</h2>
                <TablaComponenetesSimples/>
            </div>
        )
    }
}

export default App;