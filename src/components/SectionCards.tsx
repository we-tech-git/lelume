import Card from './Card';

interface SectionCardsProps {
  sectionTitle?: string;
  contentDescription: string;
  cards: Array<{
    title: string;
    subtitle: string;
    imageSrc?: string;
    imageAlt?: string;
  }>;
  className?: string;
}

const SectionCards = ({
  sectionTitle,
  contentDescription,
  cards,
  className = ""
}: SectionCardsProps) => {
  return (
    <section id="feiras" className={`py-16 bg-white ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cards Grid - 2 columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 max-w-6xl mx-auto ">


          {/* Left Column */}
          <div className="space-y-6">
        <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {sectionTitle}
            </h2>
          </div>

        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {contentDescription}
          </p>
        </div>
            {cards.slice(0, 2).map((card, index) => (
              <Card
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {cards.slice(2, 4).map((card, index) => (
              <Card
                key={index + 2}
                title={card.title}
                subtitle={card.subtitle}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCards;
