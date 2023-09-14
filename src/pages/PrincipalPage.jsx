import { CardContent, Grid, Link, Typography } from "@mui/material"
import { CardComponent } from "./CardComponent"
import { meme } from "../../public/img"
import { calculateAge } from "../helpers/age"

const myPhotoLink = meme
const myNameInit = " Jeison Ferrer!"
const aboutmeInit = `\n I am a junior system engineer. I have worked with React in the frontend and Node in the backend. Now I am interested in AI and studying deep learning and data science!`

const SCREEN_SIZE = {
    SMALL_SIZE: "sm",
    MEDIUM_SIZE: "md",
    LARGE_SIZE: "lg"
}



const PresentationText = ({ myName = myNameInit, aboutme = aboutmeInit }) => {
    return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>

    </div>
}

const SimpleCard = ({title,children})=>{
    return <CardComponent>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: "center"
            }}>
                <Typography gutterBottom variant="h5" component="div"> {title}</Typography>
                {children}
            </CardContent>
    </CardComponent>
}

export const PrincipalPage = () => {

    return <Grid container spacing={2}>

        <CardComponent xs={12} md={8} sm={12}>
            <Typography variant="body1">
                Hi! I am
                <Typography variant="body1" component="span" fontWeight="bold">
                    {myNameInit}
                </Typography>
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                {aboutmeInit}
            </Typography>

        </CardComponent>
       
        <SimpleCard title={"Age"} >
            <Typography variant="h2" >{calculateAge()}</Typography>
        </SimpleCard >
        <SimpleCard title={""} >
            <Link><Typography>EN</Typography></Link>
        </SimpleCard>

    </Grid>

}