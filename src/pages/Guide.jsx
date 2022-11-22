import GuideCategory from '../components/GuideCategory';
import Header from '../components/Header';
import '../styles/Guide.css';

const categories = [
  { title: "Candidato ao Título", src: "https://s3.glbimg.com/v1/AUTH_08fb001c60b847468664307c11fa9dc9/public/2022/guia/sealWinner.svg" },
  { title: "Pode Surpreender", src: "https://s3.glbimg.com/v1/AUTH_08fb001c60b847468664307c11fa9dc9/public/2022/guia/sealSurprise.svg" },
  { title: "Corre por Fora", src: "https://s3.glbimg.com/v1/AUTH_08fb001c60b847468664307c11fa9dc9/public/2022/guia/sealCorrePorForaV2.png" },
  { title: "Vai a Passeio", src: "https://s3.glbimg.com/v1/AUTH_08fb001c60b847468664307c11fa9dc9/public/2022/guia/sealVaiAPasseio.png" }
]

export default function Guide() {
  return (
    <>
      <Header />
      <main className='main-content'>
        <section className='category-options'>
          {categories.map((category) => (
            <div
              key={category.title}
              className="category-option"
            >
              <GuideCategory title={category.title} src={category.src} />
            </div>
          ))}
        </section>
      </main>
    </>
  )
};
