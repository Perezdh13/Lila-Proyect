import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Form from '../../../common/Form';
import { WomenHTTP } from '../../../../services/boards/WomenHTTP'




function EditWoman() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imgCartoon, setImgCartoon] = useState('');
    const [imgReal, setImgReal] = useState('');
    const [eyes, setEyes] = useState('');
    const [hair, setHair] = useState('');

    const editWoman = (event) => {
        const womanValues = {
            name: name,
            description: description,
            imgCartoon: imgCartoon,
            imgReal: imgReal,
            ojos: eyes,
            pelo: hair
        };
    }

   useEffect(() => {
        WomenHTTP().getWomanById().then((data) => {
            console.log(data);
        })
    })  

 

    
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

            <Form
                Name={name}
                Description={description}
                ImgReal={imgReal}
                ImgCartoon={imgCartoon}
                Eyes={eyes}
                Hair={hair}
            />

            <Link to="/">
                <button onClick={() => editWoman()} type="submit" className="btn btn-dark mt-3">Enviar</button>
            </Link>
        </div>
    )
}

export default EditWoman



