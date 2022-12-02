import { width } from "@mui/system";
import React from "react";
import { Container } from "@mui/material";
import Searcher from "./componets/Searcher"

const App = () => {
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
        <Searcher>Soy Saori</Searcher>
        </Container>
    )
};

export default App;