import React from "react";
import Button from "@material-ui/core/Button";
function Previous({ setpagenextNumb, pagenextNumb }) {
  return (
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
  );
}

export default Previous;
