import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
    return (
        <div style={{ backgroundColor: "#8C52FF", position: "fixed", width: "15vw", height: "100%", padding: "20px", borderRight: "1px solid #dee2e6" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "5vh", margin: "5vh" }}>
                <Link to='singUp'>
                   
                </Link>

                <Link to='avatars'>
                    <button className="btn btn-secondary">Ver avatares del alumnado</button>
                </Link>

                <Link to='studentList'>
                    <button className="btn btn-secondary">Listado y gestion del alumnado</button>
                </Link>

                <Link to='controlData'>
                    <button className="btn btn-secondary">Gestionar Datos</button>
                </Link>
            </div>
        </div>

    )
}

export default Admin