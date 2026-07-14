import './App.css'
import { ListaEstudiantes } from './ListaEstudiantes/ListaEstudiantes'
import { useState } from 'react'

function App() {
  const [estudiantes, setEstudiantes] = useState([
    {
      id: 1,
      nombre: "Juan",
      correo: "juan@gmail.com",
      telefono: "1234567",
      curso: "Desarrollo de Software",
      estado: "aprobado",
      activo: true,
    },
    {
      id: 2,
      nombre: "Juan2",
      correo: "juan2@gmail.com",
      telefono: "1234567",
      curso: "Desarrollo de Software",
      estado: "aprobado",
      activo: false,
    }
  ]);

  const eliminarEstudiante = (id) => {
    setEstudiantes((prev) => prev.filter((estudiante) => estudiante.id !== id))
  }

  const guardarEstudiante = (estudianteForm) => {
    if (estudianteForm.id) {
      const estudiantesActualizados = estudiantes.map((estudiante) => (
        estudiante.id === estudianteForm.id ? { ...estudiante, ...estudianteForm } : estudiante
      ))
      setEstudiantes(estudiantesActualizados)
      return
    }

    const ultimoId = estudiantes.length > 0 ? Math.max(...estudiantes.map((estudiante) => estudiante.id)) : 0
    const nuevoEstudiante = {
      ...estudianteForm,
      id: ultimoId + 1,
    }

    setEstudiantes((prev) => [...prev, nuevoEstudiante])
  }

  return (
    <>
      <ListaEstudiantes
        estudiantes={estudiantes}
        onEliminar={eliminarEstudiante}
        onGuardar={guardarEstudiante}
      />
    </>
  )
}

export default App