import React, { useEffect, useState } from 'react'
import QuestionsRead from '../../../../services/boards/questionsHTTP/QuestionsRead'
import QuestionsDelete from '../../../../services/boards/questionsHTTP/QuestionsDelete'
import QuestionsCreate from '../../../../services/boards/questionsHTTP/QuestionsCreate'
import { Link } from 'react-router-dom'
import QuestionsUpdate from '../../../../services/boards/questionsHTTP/QuestionsUpdate'

function QuestionTable() {
    const [questions, setQuestion] = useState([]);

    const [editingRow, setEditingRow] = useState(null);
    const [editedValues, setEditedValues] = useState({}); console.log(editedValues);

    const [ask, setAsk] = useState('');
    const [type, setType] = useState('');
    const [value, setValue] = useState('');

    const header = ['Texto', 'Tipo', 'Valor'];

    const enableEditMode = (id, ask, type, value) => {
        setEditingRow(id);
        setEditedValues({ id, ask, type, value });
    };


    const createQuestion = (event) => {
        const questionValues = {
            id: editedValues.id,
            ask: editedValues.ask,
            type: editedValues.type,
            value: editedValues.value
        }; console.log(questionValues);
        (editedValues.id !== '')
        ? QuestionsCreate().createQuestion(questionValues)
        : QuestionsUpdate().updateQuestion(questionValues)
    }

    const deteleQuestions = (id) => {
        QuestionsDelete().deleteQuestion(id)
        alert("la pregunta a sido eliminada")

    }

    useEffect(() => {
        QuestionsRead().getAllQuestion().then((res) => {
            setQuestion(res)
        })
    }, [questions])
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin:"5vh" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                        </div>
                        <div className="table-responsive" style={{ width: "40vw", margin: "auto" }}>
                            <table className="table table-striped">
                                <div style={{ height: '40vh',width:"30vw", overflowY: "auto" }}>

                                    <thead>
                                        <tr>
                                            {header.map((header, index) => (
                                                <th key={index}>{header}</th>
                                            ))}
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {questions.map((row, index) => (
                                            <tr key={index}>
                                                <td>{row.ask}</td>
                                                <td>{row.type}</td>
                                                <td>{row.value}</td>
                                                <td>
                                                    <div style={{ display: "flex", flexDirection: "column", zIndex: "1" }}>

                                                        <button onClick={() => enableEditMode(row.id, row.ask, row.type, row.value)} style={{ width: "5vw" }} type="button" className="btn btn-primary">Editar</button>

                                                        <button style={{ width: "5vw" }} type="button" className="btn btn-danger" onClick={() => deteleQuestions(row.id)}>Eliminar</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </div>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <form style={{ display: "flex", width: "40vw",height:"20vh", margin: "3vw" }}>
                <>
                    <label for="exampleFormControlInput1" class="form-label">Texto</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" value={editedValues.ask || ''} onChange={(e) => setEditedValues({ ...editedValues, ask: e.target.value })} />
                </>
                <>
                    <label for="exampleFormControlInput1" class="form-label">Tipo</label>
                    <select required className="form-control" id="category" value={editedValues.type || ''} onChange={(e) => setEditedValues({ ...editedValues, type: e.target.value })}>
                        <option value="">Escoge un tipo de clave</option>
                        <option value="ojos">Ojos</option>
                        <option value="pelo">Pelo</option>
                    </select>
                </>
                <>
                    <label for="exampleFormControlInput1" class="form-label">Valor</label>
                    <select required className="form-control" id="category" value={editedValues.value || ''} onChange={(e) => setEditedValues({ ...editedValues, value: e.target.value })}>
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
                    <button onClick={() => createQuestion()} type='submit' className="btn btn-dark mt-3">Enviar</button>
                </Link>
            </form>
        </div>
    )
}

export default QuestionTable