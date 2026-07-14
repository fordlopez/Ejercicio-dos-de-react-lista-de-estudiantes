import React, { createContext, useState } from 'react'

const EstudianteContext = createContext()

function EstudianteProvider({ children }) {
  const [estudiantes, setEstudiantes] = useState([
    {
      id: 1,
      nombre: "Juan",
      correo: "juan@gmail.com",
      telefono: "1234567",
      curso: "Desarrollo de Software",
      estado: "Solvente",
      activo: true,
    },
    {
      id: 2,
      nombre: "Juan2",
      correo: "juan2@gmail.com",
      telefono: "1234567",
      curso: "Desarrollo de Software",
      estado: "Solvente",
      activo: false,
    }
  ])

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

  const eliminarEstudiante = (id) => {
    setEstudiantes((prev) => prev.filter((estudiante) => estudiante.id !== id))
  }

  const guardarEstudiante = (estudianteForm) => {
    if (estudianteForm.id) {
      const estudiantesActualizados = estudiantes.map((estudiante) => (
        estudiante.id === estudianteForm.id ? { ...estudiante, ...estudianteForm } : estudiante
      ))
      setEstudiantes(estudiantesActualizados)
      cerrarModal()
      return
    }

    const ultimoId = estudiantes.length > 0 ? Math.max(...estudiantes.map((estudiante) => estudiante.id)) : 0
    const nuevoEstudiante = {
      ...estudianteForm,
      id: ultimoId + 1,
    }

    setEstudiantes((prev) => [...prev, nuevoEstudiante])
    cerrarModal()
  }

  const activarEstudiante = (estudianteId) => {
    const estudiantesActualizados = estudiantes.map((estudiante) => (
      estudiante.id === estudianteId ? { ...estudiante, activo: !estudiante.activo } : estudiante
    ))
    setEstudiantes(estudiantesActualizados)
  }

  return (
    <EstudianteContext.Provider value={{
      estudiantes,
      eliminarEstudiante,
      guardarEstudiante,
      activarEstudiante,
      isModalOpen,
      estudianteEnEdicion,
      abrirCrear,
      abrirEditar,
      cerrarModal,
    }}>
      {children}
    </EstudianteContext.Provider>
  )
}

export { EstudianteProvider, EstudianteContext }

