import React, { useState } from 'react'
import QuestionsCreate from '../../../../services/boards/questionsHTTP/QuestionsCreate';
import { Link } from 'react-router-dom';

function AddQuestion() {
    const [ask, setAsk] = useState('');
    const [type, setType] = useState('');
    const [value, setValue] = useState('');


    const createQuestion = (event) => {
        const questionValues = {
            
            ask: ask,
            type: type,
            value: value
        };console.log(questionValues);
        QuestionsCreate().createQuestion(questionValues)
    }
  return (
    <div>
        <div style={{ display: "flex", width: "40vw", margin: "3vw" }}>
                <>
                    <label for="exampleFormControlInput1" class="form-label">Texto</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" onChange={(e) => setAsk(e.target.value)} />
                </>
                <>
                    <label for="exampleFormControlInput1" class="form-label">Tipo</label>
                    <select required className="form-control" id="category" onChange={(e) => setType(e.target.value)}>
                        <option value="">Escoge un tipo de clave</option>
                        <option value="ojos">Ojos</option>
                        <option value="pelo">Pelo</option>
                    </select>
                </>
                <>
                    <label for="exampleFormControlInput1" class="form-label">Valor</label>
                    <select required className="form-control" id="category" onChange={(e) => setValue(e.target.value)}>
                        <option value="">Escoge un Valor</option>
                        <option value="negros">Negros</option>
                        <option value="azules">Azules</option>
                        <option value="marrones">Marrones</option>
                        <option value="verdes">Verdes</option>
                        <option value="negro">Negro</option>
                        <option value="castaño">Castaño</option>
                        <option value="blanco">Blanco</option>
                        <option value="rubio">Rubio</option>

                    </select>
                </>
                <Link to="/admin/controlData/questionsTable">
                    <button onClick={() => createQuestion()} type='submit' className="btn btn-dark mt-3">Crear</button>
                </Link>
            </div>

    </div>
  )
}

export default AddQuestion