import { useContext } from 'react';
import TeamsContext from '../context/TeamsContext';
import '../styles/guideCategory.css';
import '../styles/teamIcon.css';

export default function TeamIcon({ name, flag, category, ableToRemove, isSelected, isRanked }) {
  const { currentSelection, setCurrentSelection } = useContext(TeamsContext);

  const select = () => {
    if (!isSelected) {
      setCurrentSelection([...currentSelection, { category, team: { name, flag } }]);
    };
    return null;
  };

  const remove = () => {
    if (isSelected) {
      setCurrentSelection(currentSelection.filter(({ team }) => team.name !== name));
    };
    return null;
  };

  const chosen = isSelected && !ableToRemove ? 'chosen' : null;
  const ranked = isRanked ? 'ranked' : null;

  return (
    <div
      className={`team-icon ${chosen} ${ranked}`}
      onClick={ableToRemove ? remove : select}
    >
      <img src={flag} alt={`${name}-flag`} />
      <div className='country-name'>{name}</div>
    </div>
  )
};
