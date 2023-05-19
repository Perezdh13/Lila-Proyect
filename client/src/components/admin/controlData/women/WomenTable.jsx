import React, { useEffect, useState } from 'react'
import addWoman from '../../../../assets/img/addWoman.png'
import { Link } from 'react-router-dom';
import WomenRead from '../../../../services/boards/womenHTTP/WomenRead';
import { WomenDelete } from '../../../../services/boards/womenHTTP/WomenDelete';
function WomenTable() {
    const [women, setWomen] = useState([]); console.log(women);
    const womenValues = women.map(value => ({
        name: value.name,
        description: value.description
    }))
    const header = ['Nombre', 'Descripcion'];

    const deleteWoman = (id) => {
        WomenDelete().deleteWoman(id)
        alert("mujer eliminada")
    }

    useEffect(() => {
        WomenRead().getAllData().then((res) => {
            setWomen(res)
        })
    }, [])




    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Link to='create'>
                    <img src={addWoman} style={{ width: "5vh", marginLeft: "60vw" }} />
                </Link>
            </div>
            <div className="table-responsive" style={{ width: "40vw", margin: "auto" }}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {header.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {women.map((row, index) => (
                            <tr key={index}>
                                <td>{row.name}</td>
                                <td>{row.description}</td>

                                <td>
                                    <div style={{display:"flex", flexDirection:"column", zIndex:"1"}}>
                                        <Link to={`edit/${row.id}`}>
                                            <button style={{width:"5vw"}} type="button" className="btn btn-primary">Editar</button>
                                        </Link>
                                        <button style={{width:"5vw"}} onClick={() => deleteWoman(row.id)} type="button" className="btn btn-danger" >Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WomenTable  