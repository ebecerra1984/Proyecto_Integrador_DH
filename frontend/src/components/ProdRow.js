import React from 'react';


function ProdRow(props){

    
    return (
        <tr>
                    
                    <td>{props.nombre}</td>
                    <td>{props.descripcion}</td>
                    <td>{props.ProductCategory.nombre}</td>
                    <td>{props.cantidad} </td>
                    
                </tr>
            )
    }
    
        

export default ProdRow;