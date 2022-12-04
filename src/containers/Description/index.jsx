 import React, {Fragment} from "react";
 import { Stack, Typography } from "@mui/material";
 import PaperInfo from "../../componets/PaperInfo";
 import LocationInfo from "react"

 const Description = (props) => {
    const { userState } = props;
    const { bio } = userState
    return(
        <Fragment>
            <Stack>
                {bio != null
                ?<Typography>{bio}</Typography>
                :<Typography>About the profile</Typography>
            }
            </Stack>
            <PaperInfo userState={userState}/>
            <LocationInfo/>
        </Fragment>
    )
 };

 export default Description;