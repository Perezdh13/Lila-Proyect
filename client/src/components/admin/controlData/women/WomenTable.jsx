import React, { useEffect, useState } from 'react'
import { WomenHTTP } from '../../../../services/boards/WomenHTTP'
import Table from '../../../common/Table';
import addWoman from '../../../../assets/img/addWoman.png'
import { Link } from 'react-router-dom';

function WomenTable() {
    const [women, setWomen] = useState([])
    const womenValues = women.map(value => ({
        name: value.name,
        description: value.description,
        nation: value.ojos
    }))
    const header = ['Nombre', 'Descripcion', 'Nacionalidad'];

    console.log(women);

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
            <Table head={header} row={womenValues} />
        </div>
    )
}

export default WomenTable