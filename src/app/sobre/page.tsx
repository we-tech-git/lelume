import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nós - Lelume',
  description: 'Conheça a Lelume, especialistas em conectar pessoas a plataformas de conteúdo literário digital.',
};

export default function SobreNos() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Component */}
      <Header />

      {/* Banner Component */}
      <Banner
        imageSrc="/banner-image.jpg"
        imageAlt="Banner Sobre Nós"
        title="Sobre Nós"
        subtitle="Conheça nossa história e missão"
      />

      {/* Main Content */}
      <main>
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Na Lelume, quem ama ler vem primeiro. Somos especialistas em conectar pessoas a plataformas de conteúdo
              literário digital que transformam a forma de aprender, estudar e se atualizar.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nosso portfólio é um convite para explorar: e-books, audiobooks, revistas temáticas, quadrinhos, gibis, mangás e
              até jogos — conhecidos pensados para todos os estilos, idades e momentos do dia.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              E para quem vive o universo da saúde, vamos além: oferecemos nosso acervo técnico robusto com mais de 3.200
              títulos da Editora Manole, via Minha Biblioteca, cobrindo mais de 100 especialidades médicas. Um verdadeiro hub
              de atualização confiável, disponível em qualquer lugar.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mais do que uma marca, a Lelume é uma experiência digital prática, econômica e sustentável — unindo inovação,
              curadoria e proximidade para colocar o conhecimento no centro da sua rotina, seja você leitor, estudante ou
              profissional da saúde.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-mission text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">missão</h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Colocar quem ama ler no centro, oferecendo acesso simples e gostoso
              ao conhecimento digital; apoiar estudantes com conteúdo confiável e
              prático; e impulsionar médicos e entusiastas da saúde com acervos
              atualizados que transformam estudo em experiência.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="bg-vision text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">visão</h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Ser a marca brasileira que as pessoas lembram quando pensam em ler e
              aprender no digital: favorita dos leitores, parceira essencial de
              estudantes e presença referência em congressos e rotinas da saúde.
              Unindo curadoria, proximidade e inovação em cada ponto de contato.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-valores text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">valores</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Inovação Focada & Simplicidade</h3>
                <p className="text-lg leading-relaxed max-w-2xl mx-auto">
                  Preferimos o claro ao complexo: evoluir sempre, com foco, utilidade
                  e design de experiência que facilita a vida de quem lê, estuda e pratica.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
