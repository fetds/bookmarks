import React, { useState, useEffect, useContext, createContext } from "react";
import PropTypes from "prop-types";
import userbase from "userbase-js";

const context = createContext();
const provider = () => {
  const [session, setSession] = useState({});

  useEffect(() => {
    userbase.init({
      appId : process.env.USERBASE_APPLICATION_ID
    }).then((session) => {
      setSession({ initialized: true, ...session });
    });
  }, []);

  return {
    session,

    signIn : (username, password) => {
      return userbase.signIn({
        username : username,
        password : password
      }).then((user) => {
        setSession({ user, ...session });
      });
    },

    signUp : (username, password) => {
      return userbase.signUp({
        username : username,
        password : password
      }).then((user) => {
        setSession({ user, ...session });
      });
    }
  };
};

export const ProvideAuthentication = ({ children }) => {
  return (
    <context.Provider value={provider()}>{children}</context.Provider>
  );
};

ProvideAuthentication.propTypes = {
  children : PropTypes.object
};

export const useAuthentcation = () => {
  return useContext(context);
};
