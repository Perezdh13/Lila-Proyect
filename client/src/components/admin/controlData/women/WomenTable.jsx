import React, { useEffect, useState } from 'react'
import addWoman from '../../../../assets/img/addWoman.png'
import { Link, useParams } from 'react-router-dom';
import { WomenHTTP } from '../../../../services/boards/WomenHTTP';
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
        WomenHTTP().getAllData().then((res) => {
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
            <div className="table-responsive" style={{ width: "50vw", margin: "auto" }}>
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
                                    <Link to={`edit/${row.id}`}>
                                        <button type="button" className="btn btn-primary">Editar</button>
                                    </Link>
                                    <button onClick={() => deleteWoman(row.id)} type="button" className="btn btn-danger" >Eliminar</button>
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