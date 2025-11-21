import Image from 'next/image';

interface CardProps {
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  subtitle: string;
  className?: string;
}

const Card = ({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  className = ""
}: CardProps) => {
  return (
    <div className={`rounded-lg p-6 shadow-sm ${className} bg-card-sections`}>
      {/* Image placeholder */}
      <div className="bg-white rounded-md mb-6 relative overflow-hidden">
          <img
            src={'/no-img-pic.png'}
            alt={imageAlt || title}
            className="object-cover"
          />
      </div>

      {/* Card content */}
      <div className="text-center mt-10 py-8">
        <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
          {title}
        </h4>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Card;
