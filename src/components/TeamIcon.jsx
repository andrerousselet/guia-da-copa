import { useContext } from 'react';
import TeamsContext from '../context/TeamsContext';
import '../styles/guideCategory.css';
import '../styles/teamIcon.css';

export default function TeamIcon({ name, flag, category, ableToRemove, isSelected }) {
  const { currentSelection, setCurrentSelection } = useContext(TeamsContext);

  const select = () => {
    !isSelected && setCurrentSelection([...currentSelection, { category, team: { name, flag } }]);
  };

  const remove = () => {
    isSelected && setCurrentSelection(currentSelection.filter(({ team }) => team.name !== name));
  };

  const chosen = isSelected && !ableToRemove ? 'chosen' : null;

  return (
    <div
      className={`team-icon ${chosen}`}
      onClick={ableToRemove ? remove : select}
    >
      <img src={flag} alt={`${name}-flag`} />
      <div className='country-name'>{name}</div>
    </div>
  )
};
