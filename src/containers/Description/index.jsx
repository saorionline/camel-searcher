 import React, {Fragment} from "react";
 import { Stack, Typography } from "@mui/material";
 import PaperInfo from "../../componets/PaperInfo";
 import LocationInfo from "../../componets/LocationInfo"

 const Description = (props) => {
    const { userState } = props;
    const { bio } = userState
    return(
        <Fragment>
            <Stack>
                {bio !== null
                ?<Typography>{bio}</Typography>
                :<Typography>About the profile</Typography>
            }
            </Stack>
            <PaperInfo userState={userState}/>
            <LocationInfo userState={userState}/>
        </Fragment>
    )
 };

 export default Description;