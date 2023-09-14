import {Card, Grid, Icon, Link, Paper, Typography, useMediaQuery} from "@mui/material"
import { RIcon } from "../../../public/icons"
import { GitHub, LinkedIn } from "@mui/icons-material"
import { CardComponent } from "../../components/CardComponent"
import { calculateAge } from "../../helpers/age"
import { myPhoto, meme } from "../../../public/img"

const myPhotoLink = meme
const myNameInit = " Jeison Ferrer!"
const aboutmeInit = `\n I am a junior system engineer. I have worked with React in the frontend and Node in the backend. Now I am interested in AI and studying deep learning and data science!`

const SCREEN_SIZE = {
    SMALL_SIZE : "sm",
    MEDIUM_SIZE : "md",
    LARGE_SIZE : "lg"
}


const PresentationText = ({myName = myNameInit,aboutme = aboutmeInit})=>{
    return <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',height: '100%'}}>
        <Typography variant="body1">
                    Hi! I am
                    <Typography variant="body1" component="span" fontWeight="bold">
                        {myName}
                    </Typography>
                </Typography>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                    {aboutme}
    </Typography>
    </div>
}

const PresentationLnGitHub = ()=>{
    return (
        <Grid sx={{display:"flex", flexDirection:"column",}}>
            <Link href="https://www.linkedin.com/in/jo-ferrer/">
                        <LinkedIn sx={{ fontSize: 70 }} />
                    </Link>
                    <Link href="https://github.com/joferrer">
                        <GitHub sx={{ fontSize: 70 }}/>
            </Link>            
        </Grid>
    )
} 

const MovilePhotoSeccion = ({})=>{
    return ( 
        <section>
            <Card >
                <PresentationText />
            </Card>
            <Grid sx={{display:"flex",flexDirection:"row",mt:"20px"}}>
                <PresentationLnGitHub />
                <Grid sx={{width:"200px",ml:"10px" , height:"150px"}}>
                        <Paper sx={{height:"100%",width:"100%"}}>
                            <img id="photo" src={myPhotoLink}></img>
                        </Paper>
                </Grid>
                
            </Grid>
            <Grid sx={{mt:"10px" ,display:"flex",flexWrap:"wrap" }}>
                <CardComponent title={"Age"} content={calculateAge()}/>
                <CardComponent content={"EN"}/>
            </Grid>
        </section>
    )
}

const MediumPhotoSeccion = ({})=>{
    return (
        <Grid sx={{width:"100%",height:"50vh",ml:"10px"}}>
            
            <Paper sx={{height:"100%",
                width:"100%",
                display:"flex",
                justifyContent:"center",
                alignContent:"center",
                maxHeight: "500px"
                }}>
                <Grid sx={{width:"50%",padding:"10px",}}>
                    <PresentationText />    
                </Grid>
                <Grid sx={{width:"50%", border:"inherit"}}>
                    <img id="photo" className="gradient" alt="Photo of me" src={myPhotoLink}></img>
                </Grid>
                
            </Paper>
            <Grid sx={{mt:"10px" ,display:"flex",flexWrap:"wrap" }}>
                <PresentationLnGitHub />
                <CardComponent title={"Age"} content={calculateAge()}/>
                <CardComponent content={"EN"}/>
            </Grid>
           
        </Grid>
    )
}

const LargePhotoSeccion = ({})=>{
    return <Grid>
        <MediumPhotoSeccion />
    </Grid>
}
const PresentationMedia = ({screenValue ,img = RIcon})=>{
    
    return (screenValue === SCREEN_SIZE.SMALL_SIZE ? <MovilePhotoSeccion />:
            screenValue === SCREEN_SIZE.MEDIUM_SIZE? <MediumPhotoSeccion/>:
            <LargePhotoSeccion/>)
}

export const Presentation = ({aboutme = aboutmeInit, img})=>{

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    //const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));

    const screenValue = isSmallScreen ? SCREEN_SIZE.SMALL_SIZE : (
                        isMediumScreen ? SCREEN_SIZE.MEDIUM_SIZE : 
                        SCREEN_SIZE.LARGE_SIZE);


    return <PresentationMedia  screenValue={screenValue}/>
}