import React, { useState } from 'react'
import { WomenHTTP } from '../../../services/boards/WomenHTTP';
import { Link } from 'react-router-dom';
import Form from '../../common/Form';


function AddWoman() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imgCartoon, setImgCartoon] = useState('');
    const [imgReal, setImgReal] = useState('');
    const [eyes, setEyes] = useState('');
    const [hair, setHair] = useState('');

    const createWoman = (event) => {
        const womanValues = {
            name: name,
            description: description,
            imgCartoon: imgCartoon,
            imgReal: imgReal,
            ojos: eyes,
            pelo: hair
        };
        WomenHTTP().createWoman(womanValues)
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

            <Form
                Name={setName}
                Description={setDescription}
                ImgReal={setImgReal}
                ImgCartoon={setImgCartoon}
                Eyes={setEyes}
                Hair={setHair}
            />
            
            <Link to="/logged">
                <button onClick={() => createWoman()} type="submit" className="btn btn-dark mt-3">Enviar</button>
            </Link>
        </div>
    )
}

export default AddWoman