import React from 'react'
import InputPhoto from './InputPhoto'

function Form(props) {
    return (
        <div style={{}}>
            <div style={{ width: "40vw" }}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" onChange={(e) => props.Name(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Descripcion</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => props.Description(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Foto cartoon</label>
                    <InputPhoto setUrlImg={props.ImgCartoon} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Foto real</label>
                    <InputPhoto setUrlImg={props.ImgReal} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Color de ojos</label>
                    <select required className="form-control" id="category" onChange={(e) => props.Eyes(e.target.value)}>
                        <option value="">Escoge un color</option>
                        <option value="negros">Negros</option>
                        <option value="azules">Azules</option>
                        <option value="marrones">Marrones</option>
                        <option value="verdes">verdes</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Color de pelo</label>
                    <select required className="form-control" id="category" onChange={(e) => props.Hair(e.target.value)}>
                        <option value="">Escoge un color</option>
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