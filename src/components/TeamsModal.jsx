import ReactDOM from 'react-dom';
import teams from '../utils/teams';
import TeamIcon from './TeamIcon';
import '../styles/teamsModal.css'

export default function TeamsModal({ open, onClose }) {
  return open && ReactDOM.createPortal(
    <>
      <div className='overlay-modal' />
      <div className="teams-modal">
        <section className="teams-modal-top">
          <button type="button" onClick={onClose}>X</button>
        </section>
        <section className="teams-modal-bottom">
          {Object.values(teams).map((team) => (
            <div key={team.name}>
              <TeamIcon name={team.name} flag={team.url} />
            </div>
          ))}
        </section>
      </div>
    </>,
    document.getElementById('portal')
  )
};
