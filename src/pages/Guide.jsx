import GuideCategory from '../components/GuideCategory';
import Header from '../components/Header';
import '../styles/guide.css';

const categories = [
  { id: "favorite", title: "Candidato ao título", src: "https://s3.glbimg.com/v1/AUTH_08fb001c60b847468664307c11fa9dc9/public/2022/guia/sealWinner.svg" },
  { id: "contender", title: "Pode surpreender", src: "https://s3.glbimg.com/v1/AUTH_08fb001c60b847468664307c11fa9dc9/public/2022/guia/sealSurprise.svg" },
  { id: "outsider", title: "Corre por fora", src: "https://s3.glbimg.com/v1/AUTH_08fb001c60b847468664307c11fa9dc9/public/2022/guia/sealCorrePorForaV2.png" },
  { id: "tourist", title: "Vai a passeio", src: "https://s3.glbimg.com/v1/AUTH_08fb001c60b847468664307c11fa9dc9/public/2022/guia/sealVaiAPasseio.png" }
]

export default function Guide() {
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
      </main>
    </>
  )
};
