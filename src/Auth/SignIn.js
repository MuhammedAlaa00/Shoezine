import React from "react";
import "../style/sign.css";
import { useState, useCallback } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import { StylesProvider } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { useNavigate } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import { UseTheme } from "../Contexts/ThemeContext";
import { AuthContextConfigMethod } from "../Contexts/AuthContext";
import { useStyles } from "../Material-UI-Styles/RegisterStyles";
function SignIn({ checked, setChecked }) {
  const userIntialState = {
    email: "",
    password: "",
  };
  const [User, setUser] = useState(userIntialState);
  const Navigate = useNavigate();
  const [SignInEmailError, setSignInEmailError] = useState("");
  const [SignInPassError, setSignInPassError] = useState("");
  const [Loading, setLoading] = useState(false);
  const { SignIn } = AuthContextConfigMethod();

  const handleSignIn = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setSignInEmailError("");
        setSignInPassError("");
        setLoading(true);
        await SignIn(User.email, User.password);
        Navigate("/Home");
      } catch (err) {
        // eslint-disable-next-line default-case
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-not-found":
            setSignInEmailError("Mail not found");
            break;
          case "auth/wrong-password":
            setSignInPassError("Wrong Password");
        }
      }
      setLoading(false);
    },
    [SignIn, User.email, User.password, Navigate]
  );

  const { Theme, ThemeChange } = UseTheme();
  const classes = useStyles();
  return (
    <StylesProvider injectFirst>
      <Container maxWidth="sm" className="container">
        <Grid container className="contain-container">
          <Grid item xs={12} sm={6} className="ExceptionMuiItem">
            <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
              <Paper elevation={3} className={`${classes.paper} left-paper`}>
                <Grid container className={classes.mainGrid}>
                  <Grid item xs={8} className={classes.head}>
                    <div>
                      <h2 className={`${classes.header} head`}>sign In</h2>
                    </div>
                  </Grid>
                  {/* <Grid item xs={4}>
                    <div className={classes.switch}>
                      <Switch
                        checked={Theme}
                        onChange={ThemeChange}
                        color="secondary"
                      />
                    </div>
                  </Grid> */}
                </Grid>
                <Grid container className={classes.SecConatiner}>
                  <form autoComplete="off" className={classes.Form}>
                    <TextField
                      value={User.email}
                      onChange={(e) => {
                        setUser({
                          ...User,
                          email: e.target.value,
                        });
                      }}
                      // inputRef={SignInmailRef}
                      className={classes.textField}
                      id="outlined-mail"
                      label="mail"
                      variant="outlined"
                      color="secondary"
                      autoFocus
                      required
                      type="text"
                      helperText={SignInEmailError}
                    />
                    <TextField
                      value={User.password}
                      onChange={(e) => {
                        setUser({
                          ...User,
                          password: e.target.value,
                        });
                      }}
                      // inputRef={SignInpassRef}
                      className={classes.textField}
                      id="outlined-pass"
                      label="Password"
                      variant="outlined"
                      color="secondary"
                      required
                      type="password"
                      helperText={SignInPassError}
                    />
                    <div className="Checked">
                      <p>Dont have account ?</p>
                      <Link
                        href=""
                        className="checkLink"
                        onClick={(e) => {
                          e.preventDefault();
                          setChecked(!checked);
                        }}
                        color="secondary"
                      >
                        sign up
                      </Link>
                    </div>
                    <Button
                      variant="contained"
                      onClick={handleSignIn}
                      className={classes.button}
                      color="primary"
                    >
                      sign in
                    </Button>
                  </form>
                </Grid>
              </Paper>
            </Slide>
          </Grid>
          <Grid item xs={12} sm={6} className="ExceptionMuiItem">
            <Hidden only="xs">
              <Paper
                elevation={1}
                className={`${classes.paper} BrandImg right-paper`}
              ></Paper>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </StylesProvider>
  );
}
export default React.memo(SignIn);
