import React, { useState,useMemo } from "react";
import Button from "@material-ui/core/Button";
import Loading from "./Loading";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import "../style/home.css";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Skeleton from "@material-ui/lab/Skeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Navbar from "./Navbar";
import { AuthContextConfigMethod } from "../Contexts/AuthContext";
import useFetch from "../hooks/useFetch";
import { useStyles } from "../Material-UI-Styles/Category_styles";
function Fashion() {
  const [pagenextNumb, setpagenextNumb] = useState(1);
  const classes = useStyles();
  const { userData } = AuthContextConfigMethod();
    const title = "Fashion";
    const { loading, images } = useFetch(pagenextNumb, title);
  const Images = useMemo(() => images, [images]);
  const getEveryImage = Images.slice(0, 8).map((image) => (
    <Grid
      className={`${classes.grid} grid`}
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      key={image.id}
    >
      <Card className={classes.mainCard}>
        <CardMedia className={classes.media}>
          {!loading ? (
            <Skeleton variant="rect" height={300} width="100%" />
          ) : (
            <LazyLoadImage
              effect="blur"
              height="300px"
              width="100%"
              src={image.urls.full}
              alt="image"
              className="img"
              placeholder={<Skeleton variant="rect" height={300} />}
            />
          )}
        </CardMedia>
      </Card>
    </Grid>
  ));
  return (
    <div>
      {userData ? (
        <div className={classes.root}>
          <Navbar></Navbar>
          <Container>
            {loading ? (
              <Grid container className="centerContainer">
                {getEveryImage}
              </Grid>
            ) : (
              <Loading></Loading>
            )}
            <div className="center">
              <Button
                variant="contained"
                color="secondary"
                className="button"
                onClick={() => {
                  if (pagenextNumb === 1) {
                    setpagenextNumb(1);
                    throw console.log("error");
                  } else {
                    setpagenextNumb(pagenextNumb - 1);
                  }
                }}
              >
                prev
              </Button>
              <Button
                variant="contained"
                className="button"
                color="secondary"
                onClick={() => setpagenextNumb(pagenextNumb + 1)}
              >
                next
              </Button>
            </div>
          </Container>
        </div>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
}

export default Fashion;
