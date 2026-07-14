import React, { createContext, useState } from "react"

const ModalContext = createContext()

function ModalProvider({ children }) {
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

  return (
    <ModalContext.Provider value={{
      isModalOpen,
      estudianteEnEdicion,
      abrirCrear,
      abrirEditar,
      cerrarModal,
    }}>
      {children}
    </ModalContext.Provider>
  )
}

export { ModalProvider, ModalContext }