import { useContext } from "react";
import TeamsContext from "../context/TeamsContext";

export default function ConfirmBtn({ onClose }) {
  const { setRankedTeams, currentSelection } = useContext(TeamsContext);

  const confirmSelection = () => {
    setRankedTeams(currentSelection);
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
