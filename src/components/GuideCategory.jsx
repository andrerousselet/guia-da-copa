import { useContext, useState } from 'react';
import TeamsContext from '../context/TeamsContext';
import TeamsModal from './TeamsModal';
import '../styles/guideCategory.css';
import TeamIcon from './TeamIcon';

export default function GuideCategory({ category }) {
  const { rankedTeams } = useContext(TeamsContext);
  const [isOpen, setIsOpen] = useState(false);

  const rankByCategory = rankedTeams.filter((rankedTeam) => rankedTeam.category === category.type);

  return (
    <>
      <TeamsModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        category={category}
      />
      <div className='category-top-section'>
        <span>
          <img
            src={category.src}
            alt="emoji-img"
            height="25px"
            width="25px"
          />
        </span>
        <span>{category.title}</span>
      </div>
      <div className='category-bottom-section'>
        <div
          className='add-team-btn'
          onClick={() => setIsOpen(true)}
        >
          +
        </div>
        {rankByCategory.map(({ team }) => (
          <div key={team.name}>
            <TeamIcon name={team.name} flag={team.flag} isSelected isRanked />
          </div>
        ))}
      </div>
    </>
  )
};
