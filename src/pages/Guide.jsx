import { useState } from 'react';
import GuideCategory from '../components/GuideCategory';
import Header from '../components/Header';
import TeamsModal from '../components/TeamsModal';
import useLocalStorage from '../hooks/useLocalStorage';
import '../styles/guide.css';

const categories = [
  { id: "favorite", title: "Candidato ao Título", src: "https://s3.glbimg.com/v1/AUTH_08fb001c60b847468664307c11fa9dc9/public/2022/guia/sealWinner.svg" },
  { id: "contender", title: "Pode Surpreender", src: "https://s3.glbimg.com/v1/AUTH_08fb001c60b847468664307c11fa9dc9/public/2022/guia/sealSurprise.svg" },
  { id: "outsider", title: "Corre por Fora", src: "https://s3.glbimg.com/v1/AUTH_08fb001c60b847468664307c11fa9dc9/public/2022/guia/sealCorrePorForaV2.png" },
  { id: "tourist", title: "Vai a Passeio", src: "https://s3.glbimg.com/v1/AUTH_08fb001c60b847468664307c11fa9dc9/public/2022/guia/sealVaiAPasseio.png" }
]

export default function Guide() {
  const [rankedTeams, setRankedTeams] = useLocalStorage('ranking', []);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header />
      <main className='main-content'>
        <section className='category-options'>
          <TeamsModal open={isOpen} onClose={() => setIsOpen(false)} />
          {categories.map((category) => (
            <div
              key={category.id}
              className="category-option"
            >
              <GuideCategory
                categoryId={category.id}
                title={category.title}
                src={category.src}
                rankedTeams={rankedTeams}
                setRankedTeams={setRankedTeams}
                setIsOpen={setIsOpen}
              />
            </div>
          ))}
        </section>
      </main>
    </>
  )
};
