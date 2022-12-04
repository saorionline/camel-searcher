import React from "react";
import { CardMedia, Grid } from "@mui/material";
import MainInfo from "../../componets/MainInfo";
import Description from "../Description";

const UserCard = (props) => {
const { userState } = props
const { avatar_url } = userState


return(
    <Grid container spacing={2}>
        <Grid item xs={3}>
            <CardMedia
                component="img"
                alt = "GitHub User"
                image={avatar_url}
            />
        </Grid>
        <Grid item xs={9}>
            <MainInfo userState={userState}/>
        </Grid>
            <Description userState={userState}/>
    </Grid>
)
}
export default UserCard;