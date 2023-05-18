import React, { useState } from 'react'
import InputPhoto from '../../common/InputPhoto'
import { WomenHTTP } from '../../../services/boards/WomenHTTP';
import { Link } from 'react-router-dom';
import Form from '../../common/Form';


function AddWoman() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imrCartoo, setImgCartoon] = useState('');
    const [imgReal, setImgReal] = useState('');
    const [eyes, setEyes] = useState('');
    const [hair, setHair] = useState('');

    const createWoman = (event) => {
        const womanValues = {
            name: name,
            description: description,
            imgCartoon: imrCartoo,
            imgReal: imgReal,
            ojos: eyes,
            pelo: hair
        };

        WomenHTTP().createWoman(womanValues)
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
<div style={{background:"rgba(211,211,211,0.5)",width:"45vw", height:"90vh", overflow:"auto"}}>
            <Form
                Name={setName}
                Description={setDescription}
                ImgReal={setImgReal}
                ImgCartoon={setImgCartoon}
                Eyes={setEyes}
                Hair={setHair}
            />
          </div>  
            <Link to="/logged">
                <button onClick={() => createWoman()} type="submit" className="btn btn-dark mt-3">Enviar</button>
            </Link>
        </div>
    )
}

export default AddWoman