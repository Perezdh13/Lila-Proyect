import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Form from '../../../common/Form';
import { WomenHTTP } from '../../../../services/boards/WomenHTTP'



function EditWoman() {

    const [data,setData] = useState('')
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imgCartoon, setImgCartoon] = useState('');
    const [imgReal, setImgReal] = useState('');
    const [eyes, setEyes] = useState('');
    const [hair, setHair] = useState('');

    const { id } = useParams();
console.log(data);
    useEffect(() => {
        WomenHTTP().getWomanById(id).then((data) => {
            setData(data)
        })
    }, [id])

    const editWoman=()=>{

    }




    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

            <Form


            />

            <Link to="/">
                <button onClick={() => editWoman()} type="submit" className="btn btn-dark mt-3">Enviar</button>
            </Link>
        </div>
    )
}

export default EditWoman



