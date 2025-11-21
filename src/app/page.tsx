import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Section1 from '@/components/Section1';
import Section2 from '@/components/Section2';
import SectionCards from '@/components/SectionCards';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Component */}
      <Header />

      {/* Banner Component */}
      <Banner
        imageSrc="/home-banner.jpeg"
        imageAlt="Banner Lelume"
        title=""
        subtitle=""
      />

      <div className='bg-section'>
        <Section1
          imageSrc="/section_1.png"
          imageAlt="Nossos Parceiros"
          title="Construindo Parcerias Sólidas"
          description="Na Lelume, acreditamos que o sucesso vem através de parcerias estratégicas e colaboração mútua. Trabalhamos com os melhores parceiros do setor agrícola para oferecer soluções inovadoras e sustentáveis que beneficiam toda a cadeia produtiva."
        />

        {/* Section 2 Component - Ordem Invertida */}
        <Section2
          imageSrc="/section-2-image.png"
          imageAlt="Mulher olhando para tablet"
          title="O conhecimento que transforma"
          description="A Biblioteca Virtual oferece um acervo digital com títulos das maiores editoras parceiras, garantindo acesso ilimitado, multiusuário e sempre atualizado. Permite leitura offline, sincroniza em qualquer dispositivo, integra-se a sistemas LMS e atende bibliografias acadêmicas reconhecidas. Com busca avançada, anotações e destaques, a plataforma transforma estudo em experiência inteligente e contínua."
          sectionTitle=""
        />
      </div>

      {/* Section Cards Component */}
      <div id="feiras">
        <SectionCards
          sectionTitle="Principais Feiras"
          contentDescription="Resolving neglected air tolerably but existence conveying for. Day his put off unaffected literature partiality inhabiting."
          cards={[
            {
              title: "Santos",
              subtitle: "Congresso Paulistade Neurologia 2025",
            },
            {
              title: "Rio de Janeiro",
              subtitle: "Congresso da Associação Brasileira de Fisioterapia Cardiorrespiratória 2025",
            },
            {
              title: "Santa Catarina",
              subtitle: "Congresso Sul-Brasileirode Oftalmologia",
            },
            {
              title: "São Paulo",
              subtitle: "Congresso Brasileiro de Cannabis Medicinal",
            }
          ]}
        />
      </div>

      {/* Footer Component */}
      <div id="contato">
        <Footer />
      </div>
    </div>
  );
}
