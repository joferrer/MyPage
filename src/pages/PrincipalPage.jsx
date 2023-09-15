import { Breadcrumbs, Button, CardContent, Grid, Icon, Link, Pagination, Typography } from "@mui/material"
import { CardComponent } from "./CardComponent"
import { meme } from "../../public/img"
import { calculateAge } from "../helpers/age"
import { GitHub, LinkedIn, NavigateBefore, NavigateNext } from "@mui/icons-material"
import { useState } from "react"

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
                textAlign: "center",
                padding:0
            }}>
                <Typography gutterBottom variant="h5" component="div"> {title}</Typography>
                {children}
            </CardContent>
    </CardComponent>
}

const LanguageSelector = ()=>{
    const lenguages = ["EN", "ES", ]
    const [lenguageSelect,setLenguageSelect] = useState(0)

    return <SimpleCard >
        <Grid display={"flex"} sx={{justifyContent:"center",flexDirection:"column", cursor:"pointer"}}  
             onClick={()=> setLenguageSelect(lenguageSelect == lenguages.length-1? 0: lenguageSelect+1)}>

                <Typography variant="h2" >{lenguages[lenguageSelect]}</Typography>
                <Breadcrumbs aria-label="breadcrumb" sx={{justifyContent:"center"}}>
                    {
                        lenguages.map( lg => <Link key={lg} underline="none" color={lenguages[lenguageSelect] == lg ? "white":"darkgrey"}>{lg}</Link>)
                    }
        </Breadcrumbs>
        </Grid>           
    </SimpleCard>
}

export const PrincipalPage = () => {

    return <Grid container spacing={2}>

        <CardComponent xs={12} md={8} sm={12} >
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
        <LanguageSelector />

        <SimpleCard>
            <Link color={"#ffff"} href="https://www.linkedin.com/in/jo-ferrer/">
                <LinkedIn sx={{width:"140px", height:"140px",}}/>
            </Link>
        </SimpleCard>
        <SimpleCard className="simpleCard">
            <Link color={"#ffff"} href="https://github.com/joferrer">
                <GitHub sx={{width:"140px", height:"140px",}}/>
            </Link>
        </SimpleCard>
    </Grid>

}