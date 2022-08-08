import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Skeleton from "@material-ui/lab/Skeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useStyles } from "../Material-UI-Styles/Category_styles";
function SingleImage({ Images, loading }) {
  const classes = useStyles();
  return (
    <Grid container className="centerContainer">
      {Images.slice(0, 8).map((image) => {
        return (
          <Grid
            className={`${classes.grid} grid`}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={image.id}
          >
            <Card>
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
        );
      })}
    </Grid>
  );
}

export default SingleImage;
