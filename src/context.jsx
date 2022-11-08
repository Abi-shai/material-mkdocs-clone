import { createContext, useEffect, useState } from "react";
import { useAsyncError } from "react-router";

export const AppContext = createContext({
  innerWidth: () => { },
  isMenuButtonClicked: false,
  setMenuButtonCliked: () => { }
})

export const AppProvider = ({ children }) => {
  const getWindowInnerWidth = () => {
    return window.innerWidth;
  }

  const [innerWidth, getInnerWidth] = useState(getWindowInnerWidth());
  const [isMenuButtonClicked, setMenuButtonCliked] = useState(false);


  useEffect(() => {
    window.addEventListener('resize', () => {
      let iW = window.innerWidth;

      getInnerWidth(iW)
    })
  }, [innerWidth])

  const value = {
    innerWidth,
    isMenuButtonClicked,
    setMenuButtonCliked,
  }

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  )
}