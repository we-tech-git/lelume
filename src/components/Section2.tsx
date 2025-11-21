import Image from 'next/image';
import MinhaBiblioteca from './icons/MinhaBiblioteca';

interface Section2Props {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  sectionTitle?: string;
  className?: string;
}

const Section2 = ({ 
  imageSrc, 
  imageAlt, 
  title, 
  description, 
  sectionTitle,
  className = "" 
}: Section2Props) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        {sectionTitle && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {sectionTitle}
            </h2>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content Column - First */}
          <div className="space-y-6 order-2 lg:order-1">
            <MinhaBiblioteca />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {title}
            </h3>
            <p className="text-lg text-white leading-relaxed">
              {description}
            </p>
          </div>
          {/* Image Column - Second */}
          <div className="relative rounded-lg overflow-hidden order-1 lg:order-2">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="object-cover w-full"
            />
          </div>


        </div>
      </div>
    </section>
  );
};

export default Section2;