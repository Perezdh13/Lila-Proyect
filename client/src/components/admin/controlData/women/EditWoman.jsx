import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Form from '../../../common/Form';
import { WomenHTTP } from '../../../../services/boards/WomenHTTP'
import axios from 'axios';



function EditWoman() {

    const [data, setData] = useState('')
    const [name, setName] = useState('');console.log(name);
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
            setName(data.name)
        })
    }, [id])

    const editWoman = () => {
      
            const newData = {
                name: name || data.name,
               
            }
    console.log(newData);
            WomenHTTP().updateWoman(newData)
    
       
    }




    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Form
                Name={name} onChangeName={(e) => setName(e.target.value)}
                
            />
            <Link to="/">
                <button onClick={() => editWoman()} type="submit" className="btn btn-dark mt-3">Enviar</button>
            </Link>


        </div>
    )
}

export default EditWoman





