import { useContext } from 'react';
import GuideCategory from '../components/GuideCategory';
import Header from '../components/Header';
import TeamsContext from '../context/TeamsContext';
import '../styles/guide.css';

const categories = [
  { id: "favorite", title: "Candidato ao título", src: "https://s3.glbimg.com/v1/AUTH_08fb001c60b847468664307c11fa9dc9/public/2022/guia/sealWinner.svg" },
  { id: "contender", title: "Pode surpreender", src: "https://s3.glbimg.com/v1/AUTH_08fb001c60b847468664307c11fa9dc9/public/2022/guia/sealSurprise.svg" },
  { id: "outsider", title: "Corre por fora", src: "https://s3.glbimg.com/v1/AUTH_08fb001c60b847468664307c11fa9dc9/public/2022/guia/sealCorrePorForaV2.png" },
  { id: "tourist", title: "Vai a passeio", src: "https://s3.glbimg.com/v1/AUTH_08fb001c60b847468664307c11fa9dc9/public/2022/guia/sealVaiAPasseio.png" }
]

export default function Guide() {
  const { setRankedTeams } = useContext(TeamsContext);
  return (
    <>
      <Header />
      <main className='main-content'>
        <section className='category-options'>
          {categories.map((category) => (
            <div
              key={category.id}
              className="category-option"
            >
              <GuideCategory category={category} />
            </div>
          ))}
        </section>
        <section>
          <div className="guide-btns">
            <button
              className="reset-btn"
              onClick={() => setRankedTeams([])}
            >
              RESETAR
            </button>
            <button
              className="share-btn"
            >
              <span>COMPARTILHAR</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share-fill" viewBox="0 0 16 16">
                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
              </svg>
            </button>
          </div>
        </section>
      </main>
    </>
  )
};
