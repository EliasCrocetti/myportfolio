import React, { useState } from 'react';
import './InputDynamic.css';

const InputComponent = () => {
  const [inputValues, setInputValues] = useState(['']);

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
    console.log(newInputValues)
  };

  const handleAddInput = () => {
    setInputValues([...inputValues, '']);
  };

  const handleRemoveInput = (index) => {
    const newInputValues = [...inputValues];
    newInputValues.splice(index, 1);
    setInputValues(newInputValues);
  };

  return (
    <div>
      {inputValues.map((inputValue, index) => (
        <div key={index} style={{ marginTop: '10px' }}>
          <input
            type="text"
            className='InputDynamic'
            value={inputValue}
            onChange={(event) => handleInputChange(index, event.target.value)}
          />
          {index !== 0 && (
            <button className='btnDynamic' onClick={() => handleRemoveInput(index)}>-</button>
          )}
          {index === inputValues.length - 1 && (
            <button className='btnDynamic' onClick={handleAddInput}>+</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default InputComponent;
