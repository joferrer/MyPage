import { Card, CardContent, Typography } from "@mui/material"

export const CardComponent = ({title,content})=>{
    return <Card sx={{width:"130px",height:"128px",textAlign:"center", ml:"10px"}}>
        <CardContent sx={{width:"100%",height:"100%" ,display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography gutterBottom variant="h5" component="div"> {title}</Typography>
            <Typography variant="h2" >{content}</Typography>
        </CardContent>
    </Card>
}