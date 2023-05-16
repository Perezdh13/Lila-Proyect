import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Form from '../../../common/Form';
import { WomenHTTP } from '../../../../services/boards/WomenHTTP'
import axios from 'axios';
import { WomenUpdate } from '../../../../services/boards/Women.jsx/WomenUpdate';



function EditWoman() {

    const [data, setData] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('');
    const [imgCartoon, setImgCartoon] = useState('');
    const [imgReal, setImgReal] = useState('');
    const [eyes, setEyes] = useState('');
    const [hair, setHair] = useState('');
    const { id } = useParams();


    useEffect(() => {
        WomenHTTP().getWomanById(id).then((data) => {
            setData(data)
            console.log(data);
        })
    }, [id])

    const editWoman = () => {
        const newData = {
            id: id,
            name: name || data.name,
            description: description || data.description,
            imgCartoon: imgCartoon || data.imgCartoon,
            imgReal: imgReal || data.imgReal,
            ojos: eyes || data.ojos,
            pelo: hair || data.pelo,
        }
        console.log(newData);
        WomenUpdate().updateWoman(newData)
    }




    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Form
                Name={data.name} onChangeName={(e) => setName(e.target.value)}
                Description={data.description} onChangeDescription={(e) => setDescription(e.target.value)}
                ImgCartoon={data.imgCartoon} 
                ImgReal={data.imgReal}
                Eyes={data.ojos} onChangeEyes={(e) => setEyes(e.target.value)}
                Hair={data.pelo} onChangeHair={(e) => setHair(e.target.value)}
                
            />
            <Link to="/">
                <button onClick={() => editWoman()} type="submit" className="btn btn-dark mt-3">Enviar</button>
            </Link>


        </div>
    )
}

export default EditWoman





