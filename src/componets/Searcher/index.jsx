import React, { useState }from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Searcher = (props) => {
    const {
        inputUser,
        setInputUser
    } = props;

    const [ valueInput, setValueInput] = useState('');
    const onSearchValueChange = (event) => {
        const inputValue = event.target.value;
        setValueInput(inputValue);
    }

    console.log(valueInput);

   // const handleSubmit = () => {

   // }

    return (
    <Stack 
        sx={{
        direction: 'row',
        marginTop: '30px',
        width: '60%',
    }}
    >
    <TextField
        id="outlined-basic"
        label="GitHub User"
        placeholder="Saorion"
        variant="outlined"
        size="small"
        valueInput={valueInput}
        onChange={onSearchValueChange}
        sx={{
          width: '90%',
        }}   
    />
      <IconButton 
        //onClick={handleSubmit}
      sx={{
        size:'small',
        left:'-45px'
    }}>
        <SearchIcon/>
    </IconButton>
     
    </Stack>
)
}

export default Searcher;