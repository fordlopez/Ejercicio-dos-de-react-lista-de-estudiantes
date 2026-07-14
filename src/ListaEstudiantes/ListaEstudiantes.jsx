import { Estudiante } from '../Estudiante/Estudiante'
import Form from '../Estudiante/Form'
import Modal from '../Modal/Modal'
import "./ListaEstudiantes.css"
import { useState } from 'react'

function ListaEstudiantes({ estudiantes, onEliminar, onGuardar }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [estudianteEnEdicion, setEstudianteEnEdicion] = useState(null)

  const abrirCrear = () => {
    setEstudianteEnEdicion(null)
    setIsModalOpen(true)
  }

  const abrirEditar = (estudiante) => {
    setEstudianteEnEdicion(estudiante)
    setIsModalOpen(true)
  }

  const cerrarModal = () => {
    setIsModalOpen(false)
    setEstudianteEnEdicion(null)
  }

  const guardarDesdeFormulario = (estudianteForm) => {
    onGuardar(estudianteForm)
    cerrarModal()
  }

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
          onSubmit={guardarDesdeFormulario}
          onCancel={cerrarModal}
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
              onEliminar={onEliminar}
              onEditar={abrirEditar}
            />
          ))}
        </tbody>
      </table>
    </section>
  )
}

export { ListaEstudiantes }