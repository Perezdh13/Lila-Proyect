import React, { useEffect, useState } from 'react'
import { WomenHTTP } from '../../../../services/boards/WomenHTTP'
import Table from '../../../common/Table';
import addWoman from '../../../../assets/img/addWoman.png'
import { Link } from 'react-router-dom';

function WomenTable() {
    const [women, setWomen] = useState([])
    const womenValues = women.map(value => ({
        name: value.name,
        description: value.description
    }))
    const header = ['Nombre', 'Descripcion'];

const deleteWoman = () => {
    WomenHTTP().deleteWoman().then()
}
     
    useEffect(() => {
        WomenHTTP().getAllData().then((res) => {
            setWomen(res)
        })
    }, [])




    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"center"}}>
            <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
                <Link to='create'>
                    <img src={addWoman} style={{ width: "5vh", marginLeft:"60vw" }} />
                </Link>
            </div>
            <div style={{background:"rgba(211,211,211,0.5)",width:"55vw", height:"90vh", overflow:"auto"}}>
            <Table head={header} row={womenValues} delete={deleteWoman} />
            </div>
        </div>
    )
}

export default WomenTable