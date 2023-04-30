import React, { useEffect, useState } from 'react'

function Table(props) {


  

  

    return (
        <div className="table-responsive" style={{ width: "50vw", margin: "auto" }}>
            <table className="table table-striped">
                <thead>
                    <tr>
                        {props.head.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.row.map((row, index) => (
                        <tr key={index}>
                            {Object.values(row).map((value, index) => (
                                <td key={index}>{value}</td>
                            ))}
                            <td>
                                <button type="button" className="btn btn-primary">Editar</button>
                                <button type="button" className="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default Table