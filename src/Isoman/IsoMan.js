import { Container, Grid, Typography } from '@material-ui/core'
import Countdown from "./CountDown"
import { Link } from 'react-router-dom'


function IsoMan() {
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
        <div class="IsoMan">
            <div class="IsoManBungkus">
        <div>
        <Container maxWidth="xs">
        <Grid container direction="column" alignItems="center">
            <Grid item style={{marginBottom: 4}}>
            <Typography variant="h5" className="Header" gutterBottom>
                <strong>ISOMAN ( ISOLASI MANDIRI )</strong>
            </Typography>
            </Grid>
            <Countdown />
        </Grid>
        </Container>
        </div>
        </div>
    </div>
    </>
    );
}

export default IsoMan;
