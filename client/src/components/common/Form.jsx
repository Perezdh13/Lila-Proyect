import React, { useState } from 'react'
import InputPhoto from './InputPhoto'

function Form(props) {
    const [imgCartoon, setImgCartoon] = useState(props.ImgCartoon ? props.ImgCartoon : null);
    const [imgReal, setImgReal] = useState(null)

    const base64Cartoon = (data) => {
        Array.from(data).forEach(archivo => {
            var reader = new FileReader();
            reader.readAsDataURL(archivo);
            reader.onload = function () {
                var base64Cartoon = reader.result;
                setImgCartoon(base64Cartoon)
            }
        })
    }
    const base64Real = (data) => {
        Array.from(data).forEach(archivo => {
            var reader = new FileReader();
            reader.readAsDataURL(archivo);
            reader.onload = function () {
                var base64Real = reader.result;
                setImgReal(base64Real)
            }
        })
    }
    return (
        <div>
            <div style={{ width: "40vw" }}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" onChange={props.onChangeName} defaultValue={props.Name} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Descripcion</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={props.onChangeDescription} defaultValue={props.Description} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Foto cartoon</label>
                    <div>
                        <img src={imgCartoon} style={{ width: "8vw", height: "20vh" }} />
                        <input type="file" onChange={(e) => base64Cartoon(e.target.files)} />
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Foto real</label>
                    <div>
                        <img src={imgReal} style={{ width: "8vw", height: "20vh" }} />
                        <input type="file" onChange={(e) => base64Real(e.target.files)} />
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Color de ojos</label>
                    <select required className="form-control" id="category" onChange={props.onChangeEyes} defaultValue={props.Eyes}>
                        <option value="negros">Negros</option>
                        <option value="azules">Azules</option>
                        <option value="marrones">Marrones</option>
                        <option value="verdes">verdes</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Color de pelo</label>
                    <select required className="form-control" id="category" onChange={props.onChangeHair} defaultValue={props.Hair}>
                        <option value="negro">Negro</option>
                        <option value="rubio">Rubio</option>
                        <option value="castaño">Castaño</option>
                        <option value="blanco">Blanco</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Form