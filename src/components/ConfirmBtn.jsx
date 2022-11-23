import { useContext } from "react";
import TeamsContext from "../context/TeamsContext";

export default function ConfirmBtn({ selection, onClose }) {
  const { rankedTeams, setRankedTeams } = useContext(TeamsContext);

  const confirmSelection = () => {
    setRankedTeams([...rankedTeams, ...selection]);
    onClose();
  };

  return (
    <button
      type='button'
      className='confirm-btn'
      onClick={confirmSelection}
    >
      CONFIRMAR
    </button>
  )
};
