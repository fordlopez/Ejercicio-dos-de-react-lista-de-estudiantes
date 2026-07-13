/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png' */
import './App.css'
import { ListaEstudiantes } from './ListaEstudiantes/ListaEstudiantes'
import { useState } from 'react'

function App() {
/*   const [count, setCount] = useState(0) */
const [estudiantes, setEstudiantes] = useState([
  {
    id: 1,
    nombre: "Juan",
    correo: "juan@gmail.com",
    telefono: "1234567",
    curso: "Desarrollo de Software",
    estado:"aprobado",
    activo: true,
  },
  {
    id: 2,
    nombre: "Juan2",
    correo: "juan2@gmail.com",
    telefono: "1234567",
    curso: "Desarrollo de Software",
     estado:"aprobado",
    activo: false,
  }
]);

const eliinarEstudiantes=(id)=>{
  let nuevosEstudiantes= [...estudiantes]
nuevosEstudiantes=nuevosEstudiantes.filter(estudiantes=> estudiantes.id !=id)
setEstudiantes(nuevosEstudiantes)
}
  

  return (
    <>
      <ListaEstudiantes estudiantes={estudiantes} onElininar={eliinarEstudiantes}/>

    </>
  )
}

export default App
