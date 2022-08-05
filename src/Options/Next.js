import React from 'react'
import Button from "@material-ui/core/Button";
function Next({ setpagenextNumb, pagenextNumb }) {
  return (
    <Button
      variant="contained"
      className="button"
      color="secondary"
      onClick={() => setpagenextNumb(pagenextNumb + 1)}
    >
      next
    </Button>
  );
}

export default Next