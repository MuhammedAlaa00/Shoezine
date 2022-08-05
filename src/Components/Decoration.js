import React, { useState, useMemo } from "react";
import Loading from "./Loading";
import Container from "@material-ui/core/Container";
import "../style/home.css";
import Navbar from "./Navbar";
import { AuthContextConfigMethod } from "../Contexts/AuthContext";
import useFetch from "../hooks/useFetch";
import { useStyles } from "../Material-UI-Styles/Category_styles";
import ImageContainer from "../IndividualItem/SingleImage";
import OptionsContainer from "../Options/OptionsContainer";
function Decoration() {
  const [pagenextNumb, setpagenextNumb] = useState(1);
  const classes = useStyles();
  const { userData } = AuthContextConfigMethod();
  const title = "Decoration";
  const { loading, images } = useFetch(pagenextNumb, title);
  const Images = useMemo(() => images, [images]);
  return (
    <div>
      {userData ? (
        <div className={classes.root}>
          <Navbar />
          <Container>
            <ImageContainer loading={loading} Images={Images} />
            <OptionsContainer
              pagenextNumb={pagenextNumb}
              setpagenextNumb={setpagenextNumb}
            />
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Decoration;
