function Estudiante({ id, nombre, correo, telefono, curso, estado, activo, onEliminar, onEditar }) {
  return (
    <tr>
      <td>{nombre}</td>
      <td>{correo}</td>
      <td>{telefono}</td>
      <td>{curso}</td>
      <td>{estado}</td>
      <td>{activo ? "si" : "no"}</td>
      <td>
        <button
          className="btn-editar"
          type="button"
          onClick={() => onEditar({ id, nombre, correo, telefono, curso, estado, activo })}
        >
          Editar
        </button>
        <button className="btn-eliminar" onClick={() => onEliminar(id)}>
          Eliminar
        </button>
      </td>
    </tr>
  )
}

export { Estudiante }