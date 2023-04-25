import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
    return (
        <div>
            <div >
                <Link to='singUp'>
                    <button >Dar de alta a un nuevo alumno</button>
                </Link>
            </div>
            <div >
                <Link to='avatars'>
                    <button>Ver avatares de los alumnos</button>
                </Link>
            </div>
            <div >
                <Link to='studentList'>
                    <button>Listado y gestion de alumnos</button>
                </Link>
            </div>
        </div>
    )
}

export default Admin