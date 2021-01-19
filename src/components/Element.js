import React from 'react';


const Element = (props) => {
    return (
        <tr onClick={() => props.func(props.name)}>
            <td>{props.name.firstName}</td>
            <td>{props.name.lastName}</td>
            <td>{props.name.email}</td>
            <td>{props.name.phone}</td>
        </tr>
    )
}


export default Element;

