import React from 'react';
import '../styling/Form.css';

const Form = ({filter, changeFilter}) => {
    return (
      <form>
        <input type="text" placeholder="Filter articles" value={filter} onChange={(e) => changeFilter(e)}/>
      </form>
    )
}

export default Form;