import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Searcher from "./componets/Searcher";
import { getGitHubUser } from "./services/users"
const App = () => {

    const [inputUser, setInputUser] = useState('saorionline');
    const [userState, setUserState] = useState('inputUser');
    const [ notFound, setNotFound ] = useState(false);

    const gettinUser = async (user) => {
        const userResponse = await getGitHubUser(user)
        
        if(userState == 'saorionline'){
            localStorage.setItem('saorionline', userResponse)
        }

        if (userResponse.message == 'Not Found'){
            const { saorionline } = localStorage;
            setInputUser(saorionline);
            setNotFound(true);
        } else {
            setUserState(userResponse);
        }
    }; 
    
    console.log(userState);
    
    useEffect(() =>{
        gettinUser(inputUser)
    },[inputUser])

    return(
        <Container sx= {{
            background:"whitesmoke",
            width:"80vw",
            height: "500px",
            borderRadius: "16px",
            marginTop:"40px",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
        }} >
        <Searcher inputUser={inputUser} setInputUser={setInputUser}/>
        </Container>
    )
};

export default App;