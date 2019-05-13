import React from 'react';

const Input = (props) => (
    <div>
        <input onChange={props.handleChange} value={props.value}/>
    </div>
);

export default Input;