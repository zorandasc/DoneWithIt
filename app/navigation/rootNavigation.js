import React from "react";

//to cathe navigation object
//navigationRef will be atached to NavigationContainer
//in App.js, and navigate will be use in AppNavigator.js
export const navigationRef = React.createRef();

const navigate = (name, params) => {
  //? ako je current null nista se nece dogogditi
  navigationRef.current?.navigate(name, params);
};

export default {
  navigate,
};
