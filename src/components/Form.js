import React from 'react';
import '../styling/Form.css';

const Form = ({filter, changeFilter}) => {
    return (
      <form>
        <p> filter by keyword:  </p>
        <input type="text" value={filter} onChange={(e) => changeFilter(e)}/>
      </form>
    )
}

export default Form;