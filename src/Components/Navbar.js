import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {AuthContextConfigMethod } from '../Contexts/AuthContext';
import {useHistory} from 'react-router-dom';
import '../style/navbarmedia.css'
const useStyles = makeStyles((theme) => ({
    title: {
      textTransform:'capitalize',
      flexGrow: 1.25,
    },
    // menu:{
    //     flexGrow: 1.1
    // },
    link:{
        color:"#fff"
    }
  }));
function Navbar() {
    const classes = useStyles();
    const history = useHistory();
    const {LogOut , userData} = AuthContextConfigMethod();
    async function handleLogOut (){
        await LogOut()    
        history.push("/")     
      }
    return (
        <>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {userData.username}
                    </Typography>
                    <Button variant="contained" onClick={handleLogOut} color="primary">Log out</Button>
                </Toolbar>
            </AppBar>
            <AppBar position="sticky">
                <Toolbar className="center-toolbar">
                    <div className={classes.menu}>
                        <Button href="/Home" className={classes.link}>
                            Shoesses
                        </Button>
                        <Button href="/Clothes" className={classes.link}>
                            clothes
                        </Button>
                        <Button href="/Decoration" className={classes.link}>
                            Decoration
                        </Button>
                        <Button href="/Fashion" className={classes.link}>
                            Fashion
                        </Button>
                        <Button href="/Travel" className={classes.link}>
                            Travel
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </>
        
    )
}

export default Navbar
