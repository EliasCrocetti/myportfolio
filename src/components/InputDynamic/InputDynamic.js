import React, { useState } from 'react';
import './InputDynamic.css';

const InputComponent = (props) => {
  const { onChange } = props;
  const [inputValues, setInputValues] = useState(['']);
  const [areButtonsActive, setAreButtonsActive] = useState(false);

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
    onChange(newInputValues);
  };

  const handleAddInput = () => {
    setInputValues([...inputValues, '']);
    setAreButtonsActive(true);
    onChange([...inputValues, '']);
  };

  const handleRemoveInput = (index) => {
    const newInputValues = [...inputValues];
    newInputValues.splice(index, 1);
    setInputValues(newInputValues);
    setAreButtonsActive(newInputValues.length > 1);
    onChange(newInputValues);
  };

  return (
    <>
      {inputValues.map((inputValue, index) => (
        <span key={index}   style={{
          marginTop: '10px',
          ...(areButtonsActive && index === inputValues.length - 1
            ? { marginLeft: '32px' }
            : {})
        }}hola
        className={`${index !== 0 ? 'inputContainer' : ''} ${areButtonsActive && index === inputValues.length - 1 ? 'alignButtons' : ''}`}>
          <input
            type="text"
            
            className={`${areButtonsActive && index === inputValues.length - 1 || index === inputValues.length + 1 ? 'InputDynamic' : 'InputDynamicWhitoutLeft'}`}
            value={inputValue}
            
            {...props}
            onChange={(event) => handleInputChange(index, event.target.value)}
          />
          {index !== 0 && (
            <>
              <button className='btnDynamic removeButton' onClick={() => handleRemoveInput(index)}>-</button>
            </>
          )}
          {index === inputValues.length - 1 && (
            <button className='btnDynamic addButton' onClick={handleAddInput}>+</button>
          )}
        </span>
      ))}
    </>
  );
};

export default InputComponent;
