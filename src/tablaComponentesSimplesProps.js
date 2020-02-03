import React, { Component } from "react";

const TablaCabezera = () => {
    return (
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
            </tr>
        </thead>
    )
}

const TablaCuerpo = props => {
    /** Luego probamos paso de props con parametros */
    const filasDeDatos = props.datosActoresActrices.map((fila, indice) => {
        return (
            <tr key={indice}>
                <td>{fila.nombre}</td>
                <td>{fila.apellidos}</td>
            </tr>
        )
    }
    )
    return(
        <tbody>
            {filasDeDatos}
        </tbody>
    )
}
class TablaComponentesSimplesProps extends Component {
    render() {
        const { datosActoresActrices } = this.props
        /** Utilizo props al componente desde la aplicacion principal (App.js) */
        return (
            <table>
                <TablaCabezera />
                <TablaCuerpo datosActoresActrices={datosActoresActrices} />
            </table>
        )
    }
}
export default TablaComponentesSimplesProps