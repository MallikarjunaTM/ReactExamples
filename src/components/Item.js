import React from 'react';
import './item.css';

function Item(props){
    return(
    <div className='item-style'>
        {props.editable?<input 
                        type='text' 
                        defaultValue={props.name}
                        onKeyPress={props.onKeyPress}
                        />:
                        <h3 
                        onDoubleClick={props.onDoubleClick}
                        >{props.name}</h3>}
        <h3>{props.calories}</h3>
        <button onClick={props.onClick} name={props.name}>remove item</button>
    </div>)
}

export default Item;