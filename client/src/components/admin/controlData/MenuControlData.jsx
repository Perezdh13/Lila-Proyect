import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function MenuControlData() {
  const [open, setOpen] = useState(false);


  return (
    <div>
      <div style={{ backgroundColor: "#8C52FF", position: "fixed", width: "15vw", height: "100%", padding: "20px", borderRight: "1px solid #dee2e6" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "5vh", margin: "5vh" }}>
          <Link to="/admin/controlData/womenTable">
            <button className="btn btn-secondary">Gestion de Mujeres</button>
          </Link>
          <button className="btn btn-secondary">Gestion de Palabras</button>
          <button className="btn btn-secondary">Gestion de Centros</button>
        </div>
      </div>
    </div>
  )
}

export default MenuControlData