import React from 'react';


const Color = ({color, editing, editColor, deleteColor}) => {
    const handleClick = (e) => {
        e.stopPropagation();
        deleteColor(color);
    }

    console.log("Color is run")

    return(<li data-testid="color" onClick={() => editColor(color)}>
        <span>
        {
            editing && (<span className="delete" onClick={handleClick}>x</span>)
        }
        {` ${color.color}`}
        </span>
        <div 
            className="color-box"
            style={{ backgroundColor: color.code.hex }}
        />
    </li>);
}

export default Color;