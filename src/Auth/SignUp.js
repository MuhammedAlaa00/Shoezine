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
function SignUp({ checked, setChecked }) {
  const userIntialState = {
    email: "",
    userName: "",
    password: "",
  };
  const Navigate = useNavigate();
  const [User, setUser] = useState(userIntialState);
  const [Error, setError] = useState("");
  const [SignUpEmailError, setSignUpEmailError] = useState("");
  const [Loading, setLoading] = useState(false);
  const { SignUp } = AuthContextConfigMethod();
  const handleSignUp = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setError("");
        setSignUpEmailError("");
        setLoading(true);
        await SignUp(User.email, User.userName, User.password);
        Navigate("/Home");
      } catch (err) {
        switch (err.code) {
          case "auth/invalid-email":
            setSignUpEmailError("invalid-email");
            break;
          default:
            break;
        }
        console.log(err);
      }
      setLoading(false);
    },
    [SignUp, User.email, User.password, User.userName, Navigate]
  );
  const { Theme, ThemeChange } = UseTheme();

  const classes = useStyles();
  return (
    <StylesProvider injectFirst>
      <Container maxWidth="sm" className="container">
        <Grid container className="contain-container">
          <Grid item xs={12} sm={6}>
            <Slide direction="right" in={!checked} mountOnEnter unmountOnExit>
              <Paper elevation={3} className={`${classes.paper} left-paper`}>
                <Grid container className={classes.mainGrid}>
                  <Grid item xs={8} className={classes.head}>
                    <div>
                      <h2 className={`${classes.header} head`}>sign up</h2>
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
                      //   inputRef={emailRef}
                      value={User.email}
                      onChange={(e) => {
                        setUser({
                          ...User,
                          email: e.target.value,
                        });
                      }}
                      className={classes.textField}
                      id="EmailInput"
                      label="mail"
                      variant="outlined"
                      color="secondary"
                      autoFocus
                      required
                      type="text"
                      helperText={SignUpEmailError}
                    />
                    <TextField
                      //   inputRef={userNameRef}
                      value={User.userName}
                      onChange={(e) => {
                        setUser({
                          ...User,
                          userName: e.target.value,
                        });
                      }}
                      className={classes.textField}
                      id="userNameInput"
                      label="Username"
                      variant="outlined"
                      color="secondary"
                      required
                      type="text"
                    />
                    <TextField
                      //   inputRef={passRef}
                      value={User.password}
                      onChange={(e) => {
                        setUser({
                          ...User,
                          password: e.target.value,
                        });
                      }}
                      className={classes.textField}
                      id="PasswordInput"
                      label="Password"
                      variant="outlined"
                      color="secondary"
                      required
                      type="password"
                      helperText={Error}
                    />
                    <div className="Checked">
                      <p>Have account ?</p>
                      <Link
                        href=""
                        className="checkLink"
                        onClick={(e) => {
                          e.preventDefault();
                          setChecked(!checked);
                        }}
                        color="secondary"
                      >
                        sign In
                      </Link>
                    </div>
                    <Button
                      disabled={Loading}
                      onClick={handleSignUp}
                      variant="contained"
                      className={classes.button}
                      color="primary"
                    >
                      sign up
                    </Button>
                  </form>
                </Grid>
              </Paper>
            </Slide>
          </Grid>
          <Grid item xs={12} sm={6}>
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
export default React.memo(SignUp);
