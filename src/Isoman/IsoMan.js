import { useEffect } from 'react';
import { Container, Grid, Typography } from '@material-ui/core'
import Countdown from "./CountDown"
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css"


function IsoMan() {
    useEffect(() =>{
        AOS.init();
    })


    return (
    <>
        <div class="nav">
            <div class="logo">
                <h4>Masker.<span style={{color: '#e0501b'}}>In</span></h4>
            </div>
            <div class="links">
                <Link to="/" class="mainlink">Home</Link>
                <Link to="/FiturHome">Fitur</Link>
                <Link to="/Masker">Masker</Link>
                <a href="#">Contact</a>
                <a href="#">About</a>
            </div>
        </div>

        
        <div class="kaki"></div>
        <div class="IsoMan" data-aos="fade-right" data-aos-duration="1000">
            <div class="IsoManBungkus">
        <div class="IsoManContent">
        <Container maxWidth="xs">
        <Grid container direction="column" alignItems="center">
            <Grid item style={{marginBottom: 4}}>
            <div class="IsoManTypoGraph">
            <Typography variant="h5" className="Header" gutterBottom>
                <strong>ISOMAN ( ISOLASI MANDIRI )</strong>
            </Typography>
            </div>
            </Grid>
            <div class="IsoManCount">
            <Countdown />
            </div>
        </Grid>
        </Container>
        </div>
        </div>
    </div>
    </>
    );
}

export default IsoMan;
