import React, { createContext, useState } from "react";

export const AuthsContext = createContext();

function AuthContextProvider(props) {
  const [auth, setAuth] = useState(dbposts);

  return (
    <PostsContext.Provider value={{ auth }}>
      {props.children}
    </PostsContext.Provider>
  );
}

export default AuthContextProvider;
