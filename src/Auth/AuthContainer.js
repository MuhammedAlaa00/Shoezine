import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
function AuthContainer() {
      const [checked, setChecked] = useState(false);
  return checked ? (
    <SignIn checked={checked} setChecked={setChecked} />
  ) : (
    <SignUp checked={checked} setChecked={setChecked} />
  );
}

export default React.memo(AuthContainer);