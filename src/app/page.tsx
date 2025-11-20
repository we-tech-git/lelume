import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Section1 from '@/components/Section1';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Component */}
      <Header />
      
      {/* Banner Component */}
      <Banner
        imageSrc="/banner-image.jpg"
        imageAlt="Banner Lelume"
        title="Bem-vindos à Lelume"
        subtitle=""
      />
      
      {/* Section 1 Component */}
      <Section1
        imageSrc="/partners-image.png"
        imageAlt="Nossos Parceiros"
        title="Ouça Histórias, Viva Experiências"
        description="Transformamos grandes histórias em experiências sonoras inesquecíveis. Somos pioneiros em audiolivros no Brasil, unindo tecnologia e narrativa para conectar você ao conhecimento e à magia da literatura, onde e quando quiser."
      />
    </div>
  );
}
