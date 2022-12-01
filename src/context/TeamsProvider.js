import { useMemo, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import TeamsContext from "./TeamsContext";

export default function TeamsProvider({ children }) {
  const [rankedTeams, setRankedTeams] = useLocalStorage('ranking', []);
  const [currentSelection, setCurrentSelection] = useState(rankedTeams);

  const contextValue = useMemo(() => ({
    rankedTeams,
    setRankedTeams,
    currentSelection,
    setCurrentSelection,
  }), [rankedTeams, setRankedTeams, currentSelection, setCurrentSelection]);

  return (
    <TeamsContext.Provider value={contextValue}>
      {children}
    </TeamsContext.Provider>
  )
};
