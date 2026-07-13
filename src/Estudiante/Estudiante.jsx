function Estudiante({id,nombre,correo,telefono,curso,estado,activo,onElininar}){
    return(
        
        <tr>
            <td>{id}</td>
        <td>{nombre}</td>
           <td>{correo}</td>
           <td>{telefono}</td>
           <td>{curso}</td>
             <td>{estado}</td>
           <td>{activo ? "si" :'no'}</td>
           <td>si</td>
            <td>
                <button className="btn-editar">Editar</button>
                 <button className="btn-eliminar"  onClick={() => onElininar(id) } >Eliminar</button>
            </td>
           </tr>
    )
}

export {Estudiante}