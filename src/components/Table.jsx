import React from "react";
import useSwapiApi from "../hooks/useSwapiApi";

const Table = (props) => {
    const {planets, next, previous} = useSwapiApi();

    return(
        <table cellSpacing={0}>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Periodo De Rotacion</th>
                    <th>Periodo De Orbita</th>
                    <th>Diametro</th>
                    <th>Poblacion</th>
                </tr>
            </thead>
            <tbody>
                {planets?.results?.map(planet => {
                    return(
                        <tr key={planet.name}>
                            <td>{planet.name}</td>
                            <td>{planet.rotation_period}</td>
                            <td>{planet.orbital_period}</td>
                            <td>{planet.diameter}</td>
                            <td>{planet.population}</td>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td><button  onClick={previous}>Anterior</button></td>
                    <td><button  onClick={next}>Siguiente</button></td>
                </tr>
            </tfoot>
        </table>
    )
}

export default Table;