/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png' */
import './App.css'
import { ListaEstudiantes } from './ListaEstudiantes/ListaEstudiantes'
import { useState } from 'react'

function App() {
/*   const [count, setCount] = useState(0) */
const [estudiantes,setEstudiantes]= useState({
  id:1,
nobre:"Juan",
  correo:'juan@gmai.com',
  telefono:'1234567',
  curso:'desarrolloo de sofr',
  activo:true,
},{
  id:2,
nobre:"Juan2",
  correo:'juan@gmai.com',
  telefono:'1234567',
  curso:'desarrolloo de sofr',
  activo:false,
})

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
