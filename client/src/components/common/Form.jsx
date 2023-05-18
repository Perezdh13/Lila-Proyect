import React, { useEffect, useState } from 'react'
import InputPhoto from './InputPhoto'

function Form(props) { 
    return (
        <div style={{}}>
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

                    <InputPhoto setUrlImgCartoon={props.ImgCartoon} setUrlImgReal={props.ImgReal} />
                </div>
                
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Color de ojos</label>
                    <select required className="form-control" id="category" onChange={props.onChangeEyes} defaultValue={props.Eyes}>
                        <option value="">Escoge un color</option>
                        <option value="negros">Negros</option>
                        <option value="azules">Azules</option>
                        <option value="marrones">Marrones</option>
                        <option value="verdes">verdes</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Color de pelo</label>
                    <select required className="form-control" id="category" onChange={props.onChangeHair} defaultValue={props.Hair}>
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