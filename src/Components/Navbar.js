import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { AuthContextConfigMethod } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "../style/navbarmedia.css";
const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: "capitalize",
    flexGrow: 1.25,
  },
  // menu:{
  //     flexGrow: 1.1
  // },
  link: {
    color: "#fff",
    margin: "10px",
    textDecoration: "none",
  },
}));
function Navbar() {
  const classes = useStyles();
  const Navigate = useNavigate();
  const { LogOut, userData } = AuthContextConfigMethod();
  async function handleLogOut() {
    await LogOut();
    console.log("loged out");
    Navigate("/");
  }
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {userData.username}
          </Typography>
          <Button variant="contained" onClick={handleLogOut} color="primary">
            Log out
          </Button>
        </Toolbar>
      </AppBar>
      <AppBar position="sticky">
        <Toolbar className="center-toolbar">
          <div className={classes.menu}>
            <Link to="/Home" className={classes.link}>
              Shoesses
            </Link>
            <Link to="/Clothes" className={classes.link}>
              clothes
            </Link>
            <Link to="/Decoration" className={classes.link}>
              Decoration
            </Link>
            <Link to="/Fashion" className={classes.link}>
              Fashion
            </Link>
            <Link to="/Travel" className={classes.link}>
              Travel
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
