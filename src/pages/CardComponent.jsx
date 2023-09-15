import { Card, Grid } from "@mui/material"

export const CardComponent = ({xs = 6 ,md= 2, sm = 4, children, hg = 1})=>{
    return <Grid item xs={xs} md={md} sm={sm} >
        <Card sx={{height: window.innerWidth >=600 ? `${hg*180}px`:"180px",justifyContent: "center"}}>
            {children}
        </Card>
    </Grid>
}