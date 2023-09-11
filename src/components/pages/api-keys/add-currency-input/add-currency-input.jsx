import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// MUi
import { IconButton, TextField } from '@mui/material';

// Icons
import AddIcon from '@mui/icons-material/Add';

function AddCurrencyInput({ currencyList, setCurrencyList, submitCount }) {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  const addToList = () => {
    setCurrencyList(prev => [...prev, { id: uuidv4(), label: inputValue }]);
    setInputValue('');
    inputRef.current.focus();
  };

  return (
    <div className="flex items-center">
      <TextField
        inputRef={inputRef}
        label="ارز یا ارزهای مورد نظر"
        variant="outlined"
        color="primaryBlue"
        type="text"
        placeholder="BTCUSDT"
        className="grow"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        error={!currencyList?.length && submitCount > 0}
        helperText={
          !currencyList?.length &&
          submitCount > 0 &&
          'ارز مورد نظر خود را وارد کنید'
        }
        onKeyDown={e => {
          if (e.code === 'Enter') {
            e.preventDefault();
            addToList();
          }
        }}
      />
      <IconButton aria-label="delete" onClick={addToList}>
        <AddIcon />
      </IconButton>
    </div>
  );
}

export default AddCurrencyInput;
