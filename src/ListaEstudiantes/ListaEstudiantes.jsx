
import { Estudiante } from '../Estudiante/Estudiante'
/* import './ListaEstudiantes.css' */
import "./ListaEstudiantes.css"



function ListaEstudiantes({estudiantes,onElininar}){
    return (
        <section className="tabla-estudiantes" aria-labelledby="titulo-estudiantes">
            <header  className="tabla-estudiantes__encabezado ">
                <h2 id="titulo-estudiantes">Lista de estudiantes</h2>
                <p>control y visualizacion general del gurpo.</p>
            </header>
<div className="tabla-estudiantes__contenedor "></div>
<table>
<thead>



<tr>
    <th scope="col">nobre</th>
    <th scope="col">correo</th>
    <th scope="col">telefono </th>
    <th scope="col">curso</th>
    <th scope="col">estado</th>
    <th scope="col">activo</th>
    <th scope="col">acciones</th>
</tr>
</thead>

<tbody> {
    estudiantes.map((estudiantes)=>(
        <Estudiante key={estudiantes.id} {...estudiantes} onElininar={onElininar}/>
    ))
    } 

   

</tbody>
</table>
        </section>


    )
}

export {ListaEstudiantes}