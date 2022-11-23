import { useState } from 'react';
import TeamIcon from '../components/TeamIcon';
import teams from '../utils/teams';
import '../styles/guideCategory.css';

export default function GuideCategory({ categoryId, title, src, rankedTeams, setRankedTeams, setIsOpen }) {
  const [selectedTeams, setSelectedTeams] = useState(
    rankedTeams
      .filter((rankedTeam) => rankedTeam.categoryId === categoryId)
      .map((rankedTeam) => rankedTeam.team)
  );

  const rankTeam = () => {
    setRankedTeams([...rankedTeams, { categoryId, team: teams.BRA }]);
    setSelectedTeams([...selectedTeams, teams.BRA]);
  };

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
          onClick={() => setIsOpen(true)}
        >
          +
        </div>
        {selectedTeams?.map((team) => (
          <div key={team.name}>
            <TeamIcon name={team.name} flag={team.url} />
          </div>
        ))}
      </div>
    </div>
  )
};
