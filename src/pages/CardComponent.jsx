import { Card, Grid } from "@mui/material"

export const CardComponent = ({xs = 6 ,md= 2, sm = 4, children})=>{
    return <Grid item xs={xs} md={md} sm={sm}>
        <Card>
            {children}
        </Card>
    </Grid>
}