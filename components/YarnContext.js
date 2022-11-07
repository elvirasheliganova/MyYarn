import React, { useState, createContext } from "react";

export const YarnContext = createContext()

export const YarnProvider = props => {
  const [yarns, setYarns] = useState([])

  return (
    <YarnContext.Provider value={[yarns, setYarns]}>
      {props.children}
    </YarnContext.Provider>
  )
}