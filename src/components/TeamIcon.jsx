import flags from '../utils/flags';
import '../styles/GuideCategory.css';

export default function TeamIcon() {
  return (
    <div className='team-icon chosen-team'>
      <img src={flags.BRA.url} alt="country-flags" />
      <p>{flags.BRA.name}</p>
    </div>
  )
};
