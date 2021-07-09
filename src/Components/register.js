import React from 'react';
import '../style/sign.css';
import { useState , useRef , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import { StylesProvider } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import {useHistory} from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden';
import {UseTheme} from '../Contexts/ThemeContext'
import {AuthContextConfigMethod } from '../Contexts/AuthContext';
function Registercomponent() {
  const history = useHistory()
  const emailRef = useRef();
  const SignInmailRef = useRef();
  const passRef = useRef();
  const SignInpassRef = useRef();
  const userNameRef = useRef();
  const [Error, setError] = useState('');
  const [SignInEmailError, setSignInEmailError] = useState('')
  const [SignInPassError, setSignInPassError] = useState("")
  const [SignUpEmailError, setSignUpEmailError] = useState('')
  const [Loading, setLoading] = useState(false);
  const {SignUp , SignIn} = AuthContextConfigMethod();
  async function handleSignUp (e) {
    e.preventDefault();
    try {
      setError('')
      setSignUpEmailError('')
      setLoading(true)
      await SignUp(emailRef.current.value , userNameRef.current.value , passRef.current.value)
      history.push('/Home')
    } catch (err){
      switch (err.code) {
        case "auth/invalid-email":
          setSignUpEmailError('invalid-email')
          break;
      
        default:
          break;
      }
      console.log(err);
    }
    setLoading(false)
  }
  async function handleSignIn (e) {
    e.preventDefault()
    try {
      setSignInEmailError('')
      setSignInPassError('')
      setLoading(true)
      await SignIn(SignInmailRef.current.value , SignInpassRef.current.value)
      history.push('/Home')
    }catch(err) {
       // eslint-disable-next-line default-case
       switch (err.code) {
         case "auth/invalid-email":
          case "auth/user-not-found" :
            setSignInEmailError('Mail not found')
           break;
           case "auth/wrong-password" : 
           setSignInPassError("Wrong Password")
              
       }
    }
    // catch{
    //   setError('failed to sign in')
    // }
    setLoading(false)
  }
  const {Theme ,ThemeChange} = UseTheme()
  const [checked, setChecked] = useState(false);
  const useStyles = makeStyles((theme) => ({
    mainGrid :{
      paddingTop:theme.spacing(3),
      marginTop: theme.spacing(3),
      paddingBottom:theme.spacing(3)
    },
    switch:{
      display:'flex',
      justifyContent:'flex-end',
      alignItems:'center',
      height:'100%'
    },
    head:{
      textAlign:'start',
      paddingLeft:theme.spacing(3)
    },
    header :{
      margin:0
    },
    /* second container */
    SecConatiner:{
      padding:theme.spacing(2)
    },
    Form:{
      width:'100%'
    },
    textField:{
      width:'100%',
      marginBottom:theme.spacing(3),
    },
    button:{
      marginBottom:theme.spacing(3),
    },
    /* second paper */
    paper : {
      height:window.innerHeight - 100
    }
  }));
  const classes = useStyles();
  return (
      <StylesProvider injectFirst>
        <Container maxWidth="sm" className="container">
          <Grid container className="contain-container">
            <Grid item xs={12} sm={6}>
              {!checked ? <Slide direction="right" in={!checked} mountOnEnter unmountOnExit>
                <Paper elevation={3} className={`${classes.paper} left-paper`}>
                  <Grid container className={classes.mainGrid}>
                    <Grid item xs={8} className={classes.head}>
                      <div>
                        <h2 className={`${classes.header} head`}>sign up</h2>
                      </div>
                    </Grid>
                    <Grid item xs={4}>
                      <div className={classes.switch}>
                        <Switch
                          checked={Theme}
                          onChange={ThemeChange}
                          color="secondary"
                        />
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.SecConatiner}>
                    <form autoComplete="off" className={classes.Form}>
                      <TextField inputRef={emailRef} className={classes.textField} id="" label="mail" variant="outlined" color="secondary"
                      autoFocus
                      required
                      type="text"
                      helperText={SignUpEmailError}
                      />
                      <TextField inputRef={userNameRef} className={classes.textField} id="" label="Username" variant="outlined" color="secondary"
                      required
                      type="text"
                      />
                      <TextField inputRef={passRef} className={classes.textField} id="" label="Password" variant="outlined" color="secondary"
                      required
                      type="password"
                      helperText={Error}
                      />
                      <div className="Checked"><p>Have account ?</p> 
                      <Link href="" className="checkLink" onClick={(e)=>{e.preventDefault()
                        setChecked(!checked)}} color="secondary">sign In</Link>
                      </div>
                      <Button disabled={Loading} onClick={handleSignUp} variant="contained" className={classes.button} color="primary">sign up</Button>
                    </form>
                  </Grid>
                </Paper>
              </Slide>:null}
              {checked ?<Slide direction="right" in={checked} mountOnEnter unmountOnExit>
                <Paper elevation={3} className={`${classes.paper} left-paper`}>
                  <Grid container className={classes.mainGrid}>
                    <Grid item xs={8} className={classes.head}>
                      <div>
                        <h2 className={`${classes.header} head`}>sign In</h2>
                      </div>
                    </Grid>
                    <Grid item xs={4}>
                      <div className={classes.switch}>
                        <Switch
                          checked={Theme}
                          onChange={ThemeChange}
                          color="secondary"
                        />
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.SecConatiner}>
                    <form autoComplete="off" className={classes.Form}>
                      <TextField inputRef={SignInmailRef} className={classes.textField} id="outlined-mail" label="mail" variant="outlined" color="secondary"
                      autoFocus
                      required
                      type="text"
                      helperText = {SignInEmailError}
                      />
                      <TextField inputRef={SignInpassRef} className={classes.textField} id="outlined-pass" label="Password" variant="outlined" color="secondary"
                      required
                      type="password"
                      helperText = {SignInPassError}
                      />
                      <div className="Checked"><p>Dont have account ?</p> 
                      <Link href="" className="checkLink" onClick={(e)=>{e.preventDefault()
                        setChecked(!checked)}} color="secondary">sign up</Link>
                      </div>
                      <Button variant="contained" onClick={handleSignIn} className={classes.button} color="primary">sign in</Button>
                    </form>
                  </Grid>
                </Paper>
              </Slide>: null}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Hidden only="xs">
                <Paper elevation={1} className={`${classes.paper} BrandImg right-paper`}></Paper>
              </Hidden>
            </Grid>
          </Grid>
        </Container>
    </StylesProvider>
  );
}
export default Registercomponent;
