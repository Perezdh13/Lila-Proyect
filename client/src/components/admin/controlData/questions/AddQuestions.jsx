import React, { useState } from 'react'
import { WomenHTTP } from '../../../services/boards/WomenHTTP';
import { Link } from 'react-router-dom';
import Form from '../../common/Form';

function AddQuestion() {
    const [question, setQuestion] = useState('');
    

    const createQuestion = (event) => {
        const questionValues = {
            question: question
            
        };

        WomenHTTP().createQuestion(questionValues)
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

            <Form
                Question={setQuestion}
                
            />
            
            <Link to="/logged">
                <button onClick={() => createQuestion()} type="submit" className="btn btn-dark mt-3">Enviar</button>
            </Link>
        </div>
    )
}

export default AddQuestion