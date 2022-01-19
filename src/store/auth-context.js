import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
});

console.log(AuthContext);

export default AuthContext;
