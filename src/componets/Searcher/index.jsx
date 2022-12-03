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

    console.log('valueInput', valueInput);

   const handleSubmit = () => {
    setInputUser(valueInput);
    console.log('inputUser', inputUser);
   }

return (
    <Stack 
        direction="row"
        sx={{   
        marginTop: '30px',
        width: '60%',
    }}
    >
    <TextField
        id="outlined-basic"
        label="Social Media User"
        placeholder="Saorion"
        variant="outlined"
        size="small"
        valueInput={valueInput}
        onChange={onSearchValueChange}
        sx={{
          width: '50%',
        }}   
    />
    <IconButton 
    onClick={handleSubmit}
    size="small"
      sx={{ 
        left:'-45px'
    }}>
        <SearchIcon/>
    </IconButton>
     
    </Stack>
)
}

export default Searcher;