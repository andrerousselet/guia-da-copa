import { useContext } from 'react';
import ReactDOM from 'react-dom';
import teams from '../utils/teams';
import TeamIcon from './TeamIcon';
import CloseBtn from './CloseBtn';
import ConfirmBtn from './ConfirmBtn';
import TeamsContext from '../context/TeamsContext';
import Overlay from './Overlay';
import '../styles/teamsModal.css';

export default function TeamsModal({ open, onClose, category }) {
  const { currentSelection } = useContext(TeamsContext);

  const checkIfSelected = (name) => {
    return currentSelection.some(({ team }) => team.name === name)
  };

  return open && ReactDOM.createPortal(
    <>
      <Overlay />
      <div className="teams-modal">
        <section className="teams-modal-top">
          <span className='modal-title'>Escolher seleções</span>
          <CloseBtn onClose={onClose} />
        </section>
        <section className='teams-modal-center'>
          <span>CATEGORIA:
            {' '}
            <strong>{category.title}</strong>
          </span>
          <ConfirmBtn onClose={onClose} />
        </section>
        <section className='teams-modal-selection'>
          {currentSelection
            .filter((currentTeam) => currentTeam.category === category.type)
            .map(({ team }) => (
              <div key={team.name}>
                <TeamIcon
                  name={team.name}
                  flag={team.flag}
                  ableToRemove
                  isSelected={checkIfSelected(team.name)}
                />
              </div>
            ))}
        </section>
        <section className="teams-modal-bottom">
          {teams.map((team) => (
            <div key={team.name}>
              <TeamIcon
                name={team.name}
                flag={team.flag}
                category={category.type}
                isSelected={checkIfSelected(team.name)}
              />
            </div>
          ))}
        </section>
      </div>
    </>,
    document.getElementById('portal')
  )
};
