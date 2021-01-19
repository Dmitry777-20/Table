import React from 'react';


const Button = (props) => {
    return (
        <th>
            <button className="buttonSort" onClick={() => props.renderSort(props.name)}>{props.name}
                {props.pointer === 'up' + props.name &&
                <span className='up'>up</span>
                }
                {props.pointer === 'down' + props.name &&
                <span className='down'>down</span>
                }
            </button>
        </th>
    )
}


export default Button;