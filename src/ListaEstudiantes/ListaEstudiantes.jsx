import { Estudiante } from '../Estudiante/Estudiante'
import Form from '../Estudiante/Form'
import { EstudianteContext } from '../context/EstudianteContext.jsx'
import Modal from '../Modal/Modal'
import "./ListaEstudiantes.css"
import { useContext } from 'react'

function ListaEstudiantes() {
  const {
    estudiantes,
    eliminarEstudiante,
    activarEstudiante,
    isModalOpen,
    estudianteEnEdicion,
    abrirCrear,
    abrirEditar,
    cerrarModal,
  } = useContext(EstudianteContext)

  return (
    <section className="tabla-estudiantes" aria-labelledby="titulo-estudiantes">
      <Modal
        isOpen={isModalOpen}
        title={estudianteEnEdicion ? 'Editar alumno' : 'Nuevo alumno'}
        description="Aqui puede crear o editar los campos del alumno."
        onClose={cerrarModal}
        showActions={false}
      >
        <Form
          key={estudianteEnEdicion?.id ?? 'nuevo'}
          initialValues={estudianteEnEdicion}
        />
      </Modal>

      <header className="tabla-estudiantes__encabezado ">
        <h2 id="titulo-estudiantes">Lista de estudiantes</h2>
        <p>control y visualizacion general del gurpo.</p>
        <button type="button" className="btn-nuevo" onClick={abrirCrear}>Nuevo alumno</button>
      </header>

      <div className="tabla-estudiantes__contenedor "></div>

      <table>
        <thead>
          <tr>
            <th scope="col">nombre</th>
            <th scope="col">correo</th>
            <th scope="col">telefono </th>
            <th scope="col">curso</th>
            <th scope="col">estado</th>
            <th scope="col">activo</th>
            <th scope="col">acciones</th>
          </tr>
        </thead>

        <tbody>
          {estudiantes.map((estudiante) => (
            <Estudiante
              key={estudiante.id}
              {...estudiante}
              onEditar={abrirEditar}
              onEliminar={eliminarEstudiante}
              onActivo={activarEstudiante}
            />
          ))}
        </tbody>
      </table>
    </section>
  )
}

export { ListaEstudiantes }

/* function ListaEstudiantes({ estudiantes, onGuardar, onEliminar, onActivo }) {
  // ...igual que antes...

  return (
    // ...
        <tbody>
          {estudiantes.map((estudiante) => (
            <Estudiante
              key={estudiante.id}
              {...estudiante}
              onEditar={abrirEditar}
              onEliminar={onEliminar}
              onActivo={onActivo}
            />
          ))}
        </tbody>
    // ...
  )
} */