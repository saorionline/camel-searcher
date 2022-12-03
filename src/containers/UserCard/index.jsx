import React from "react";
import { CardMedia, Grid } from "@mui/material";

const UserCard = (props) => {
const { userState } = props
const { avatar_url } = userState


return(
    <Grid
    contenedor
    >
        <Grid item xs={3}>
            <CardMedia
                component="img"
                alt = "GitHub User"
                image={avatar_url}
            />
        </Grid>
        <Grid item xs={9}></Grid>

    </Grid>
)
}
export default UserCard;