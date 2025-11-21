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
          title="O Universo das HQs ao Seu Alcance"
          description="Descubra, leia e colecione histórias em quadrinhos de todos os gêneros, em qualquer lugar. A Social Comics é a plataforma digital que conecta fãs e criadores, trazendo as melhores HQs e conteúdos exclusivos na palma da sua mão."
          sectionTitle=""
        />
      </div>
      
      {/* Section Cards Component */}
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
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
}
