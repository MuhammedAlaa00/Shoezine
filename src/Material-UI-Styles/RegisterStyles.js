import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  mainGrid: {
    paddingTop: theme.spacing(3),
    marginTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  switch: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
  },
  head: {
    textAlign: "start",
    paddingLeft: theme.spacing(3),
  },
  header: {
    margin: 0,
  },
  /* second container */
  SecConatiner: {
    padding: theme.spacing(2),
  },
  Form: {
    width: "100%",
  },
  textField: {
    width: "100%",
    marginBottom: theme.spacing(3),
  },
  button: {
    marginBottom: theme.spacing(3),
  },
  /* second paper */
  paper: {
    height: window.innerHeight - 100,
  },
}));
