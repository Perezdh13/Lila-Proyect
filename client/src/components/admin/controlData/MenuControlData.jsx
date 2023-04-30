import React, { useState } from 'react'

function MenuControlData() {
    const [open, setOpen] = useState(false);


    return (
        <div>
        <div style={{ position: "fixed", top: 0, left: open ? "15vw" : 0 }}>
        <button className="btn btn-primary" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
            Mostrar/Ocultar
        </button>
      </div>
      
      <div className={"collapse" + (open ? " show" : "")} style={{ backgroundColor:"purple", position: "fixed", width: "15vw",height:"100%", padding: "20px", borderRight: "1px solid #dee2e6" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "5vh", margin: "5vh" }}>
            <button className="btn btn-secondary">Gestion mujeres</button>
            <button className="btn btn-secondary">Gestion Palabras</button>
            <button className="btn btn-secondary">Gestion Alumnado</button>
        </div>
      </div>
      </div>
    )
}

export default MenuControlData