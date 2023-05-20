import React, { useState } from 'react'
import { WomenCreate } from '../../../../services/boards/womenHTTP/WomenCreate'
import Form from '../../../common/Form';
import { Link } from 'react-router-dom';
 
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
        WomenCreate().createWoman(womanValues)
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div style={{ background: "rgba(211,211,211,0.5)", width: "45vw", height: "90vh", overflow: "auto" }}>
                <Form
                    onChangeName={(e) => setName(e.target.value)}
                    onChangeDescription={(e) => setDescription(e.target.value)}
                    ImgReal={setImgReal}
                    ImgCartoon={setImgCartoon}
                    onChangeEyes={(e) => setEyes(e.target.value)}
                    onChangeHair={(e) => setHair(e.target.value)}
                />
            </div>
            <Link to="/admin/controlData/womenTable">
            <button onClick={() => createWoman()} type="submit" className="btn btn-dark mt-3">Enviar</button>
            </Link>
        </div>
    )
}

export default AddWoman