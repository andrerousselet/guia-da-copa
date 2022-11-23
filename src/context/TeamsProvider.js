import { useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import TeamsContext from "./TeamsContext";

export default function TeamsProvider({ children }) {
  const [rankedTeams, setRankedTeams] = useLocalStorage('ranking', []);

  const contextValue = useMemo(() => ({
    rankedTeams,
    setRankedTeams,
  }), [rankedTeams, setRankedTeams]);

  return (
    <TeamsContext.Provider value={contextValue}>
      {children}
    </TeamsContext.Provider>
  )
};
