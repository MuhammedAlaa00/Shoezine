import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    margin: "10px !important",
  },
  mainCard: {
    maxWidth: 345,
    width: "100%",
  },
  media: {
    height: 300,
    overflow: "hidden",
    width: "100%",
  },
}));
