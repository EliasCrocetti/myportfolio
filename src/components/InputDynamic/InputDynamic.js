import React, { useState } from 'react';
import './InputDynamic.css';

const InputComponent = (props) => {
  const { onChange } = props;
  const [inputValues, setInputValues] = useState(['']);

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
    onChange(newInputValues);
  };

  const handleAddInput = () => {
    setInputValues([...inputValues, '']);
    onChange([...inputValues, '']);
  };

  const handleRemoveInput = (index) => {
    const newInputValues = [...inputValues];
    newInputValues.splice(index, 1);
    setInputValues(newInputValues);
    onChange(newInputValues);
  };

  return (
    <>
      {inputValues.map((inputValue, index) => (
        <span key={index} style={{ marginTop: '10px' }}>
          <input
            type="text"
            className='InputDynamic'
            value={inputValue}
            {...props}
            onChange={(event) => handleInputChange(index, event.target.value)}
          />
          {index !== 0 && (
            <button className='btnDynamic' onClick={() => handleRemoveInput(index)}>-</button>
          )}
          {index === inputValues.length - 1 && (
            <button className='btnDynamic' onClick={handleAddInput}>+</button>
          )}
        </span>
      ))}
    </>
  );
};

export default InputComponent;
