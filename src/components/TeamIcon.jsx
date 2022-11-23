import '../styles/guideCategory.css';
import '../styles/teamIcon.css';

export default function TeamIcon({ name, flag, category, selection, setSelection }) {

  const select = () => {
    if (setSelection) return setSelection([...selection, { category, team: { name, flag } }]);
    return null;
  };

  return (
    <div
      className='team-icon chosen-team'
      onClick={select}
    >
      <img src={flag} alt={`${name}-flag`} />
      <p>{name}</p>
    </div>
  )
};
