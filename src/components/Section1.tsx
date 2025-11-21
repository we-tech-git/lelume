import Image from 'next/image';

interface Section1Props {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  className?: string;
}

const Section1 = ({
  imageSrc,
  imageAlt,
  title,
  description,
  className = ""
}: Section1Props) => {
  return (
    <section id="parceiros" className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nossos parceiros
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Column */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="object-cover img-sections"
            />
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <img src="/logo_tocalivros.png" alt="Logo tocalivros" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {title}
            </h3>
            <p className="text-lg text-white leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
