import React, {Fragment} from "react";
import { Typography, Stack } from "@mui/material";
import { render } from "react-dom";

const MainInfo = (props) => {
    const { userState } = props;
    const { 
        name,
        login,
        created_at,
    } = userState;

    return (
        <Fragment>
            <Stack>
                <Typography>{name}</Typography>
                <Typography>{created_at}</Typography>
            </Stack>
            <Typography>{login}</Typography>
        </Fragment>
    )
}

export default MainInfo;