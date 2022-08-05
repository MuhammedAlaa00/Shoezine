import React from "react";
import Loading from "./Loading";
import SingleImage from "./SingleImage";
function ImageContainer({ loading, Images }) {
  return (
    <>
      {loading ? (
        <SingleImage Images={Images} loading={loading} />
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ImageContainer;
