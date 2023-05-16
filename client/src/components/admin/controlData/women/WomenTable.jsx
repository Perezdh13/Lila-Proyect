import React, { useEffect, useState } from 'react'
import { WomenHTTP } from '../../../../services/boards/WomenHTTP'
import addWoman from '../../../../assets/img/addWoman.png'
import { Link, useParams } from 'react-router-dom';
import { WomenDelete } from '../../../../services/boards/Women.jsx/WomenDelete';
function WomenTable() {
    const [women, setWomen] = useState([]); console.log(women);
    const womenValues = women.map(value => ({
        name: value.name,
        description: value.description,
        nation: value.ojos        
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
        <div>
            <div>
                <Link to='create'>
                    <img src={addWoman} style={{ width: "5vh", marginLeft:"60vw" }} />
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
                                <button onClick={()=>deleteWoman(row.id)} type="button" className="btn btn-danger" >Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
            {/* <Table 
            women={women}
            id={women.id}
            head={header} 
            row={womenValues} 
            delete={deleteWoman}  /> */}
        </div>
    )
}

export default WomenTable  