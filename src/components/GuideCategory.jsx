import TeamIcon from './TeamIcon';
import '../styles/GuideCategory.css';

export default function GuideCategory({ title, src }) {
  return (
    <div>
      <div className='category-top-section'>
        <span>
          <img
            src={src}
            alt="emoji-img"
            height="25px"
            width="25px"
          />
        </span>
        <span>{title}</span>
      </div>
      <div className='category-bottom-section'>
        <div
          className='team-icon add-btn'
          onClick={() => console.log('clicked')}
        >
          +
        </div>
        <TeamIcon />
      </div>
    </div>
  )
};
