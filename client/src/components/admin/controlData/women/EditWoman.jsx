import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Form from '../../../common/Form';
import { WomenHTTP } from '../../../../services/boards/WomenHTTP'
import axios from 'axios';



function EditWoman() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imgCartoon, setImgCartoon] = useState('');
    const [imgReal, setImgReal] = useState('');
    const [eyes, setEyes] = useState('');
    const [hair, setHair] = useState('');

    const { id } = useParams();

    useEffect(() => {
        WomenHTTP().getWomanById(id).then((data) => {
            setName(data.data.name)
        })
    }, [id])

    const editWoman=()=>{
        
    }




    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Form
            // Name={melocotones}
            // Description={description}
            // ImgReal={imgReal}
            // ImgCartoon={imgCartoon}
            // Eyes={eyes}
            // Hair={hair}
            />
            <Link to="/">
                <button onClick={() => editWoman()} type="submit" className="btn btn-dark mt-3">Enviar</button>
            </Link>


        </div>
    )
}

export default EditWoman





