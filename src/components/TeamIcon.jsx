import '../styles/guideCategory.css';

export default function TeamIcon({ name, flag }) {
  return (
    <div className='team-icon chosen-team'>
      <img src={flag} alt={`${name}-flag`} />
      <p>{name}</p>
    </div>
  )
};
