import React, { useState } from 'react'
import InputPhoto from '../../common/InputPhoto'
import { WomenHTTP } from '../../../services/boards/WomenHTTP';
import { Link } from 'react-router-dom';


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
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "40vw" }}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" onChange={(e) => setName(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Descripcion</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Foto cartoon</label>
                    <InputPhoto setUrlImg={setImgCartoon} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Foto real</label>
                    <InputPhoto setUrlImg={setImgReal} />
                </div>
                <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Color de ojos</label>
                        <select required className="form-control" id="category" onChange={(e) => setEyes(e.target.value)}>
                            <option value="negros">Negros</option>
                            <option value="azules">Azules</option>
                            <option value="marrones">Marrones</option>
                            <option value="verdes">verdes</option>
                        </select>
                    </div>
                    <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Color de ojos</label>
                        <select required className="form-control" id="category" onChange={(e) => setHair(e.target.value)}>
                            <option value="negro">Negro</option>
                            <option value="rubio">Rubio</option>
                            <option value="castaño">Castaño</option>
                            <option value="blanco">Blanco</option>
                        </select>
                    </div>
                    <Link to="/">
                        <button onClick={() => createWoman()} type="submit" className="btn btn-dark mt-3">Enviar</button>
                    </Link>
            </div>
        </div>
    )
}

export default AddWoman