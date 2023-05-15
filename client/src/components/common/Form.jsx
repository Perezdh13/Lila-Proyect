import React from 'react';
import InputPhoto from './InputPhoto';

function Form(props) {
  const handleChangeImgCartoon = (url) => {
    props.setImgCartoon(url);
  };

  const handleChangeImgReal = (url) => {
    props.setImgReal(url);
  };

  return (
    <div>
      <div style={{ width: '40vw' }}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => props.Name(e.target.value)} value={props.name} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripcion</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => props.Description(e.target.value)} value={props.description} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Foto cartoon</label>
          <InputPhoto setUrlImg={handleChangeImgCartoon} urlImg={props.ImgCartoon} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Foto real</label>
          <InputPhoto setUrlImg={handleChangeImgReal} urlImg={props.ImgReal} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Color de ojos</label>
          <select required className="form-control" id="category" onChange={(e) => props.Eyes(e.target.value)} value={props.eyes}>
            <option value="">Selecciona un color</option>
            <option value="negros">Negros</option>
            <option value="azules">Azules</option>
            <option value="marrones">Marrones</option>
            <option value="verdes">verdes</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Color de cabello</label>
          <select required className="form-control" id="category" onChange={(e) => props.Hair(e.target.value)} value={props.hair}>
            <option value="">Selecciona un color</option>
            <option value="negro">Negro</option>
            <option value="rubio">Rubio</option>
            <option value="castaño">Castaño</option>
            <option value="blanco">Blanco</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Form;













