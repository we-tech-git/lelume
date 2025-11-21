import Image from 'next/image';

interface BannerProps {
  imageSrc: string;
  imageAlt: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

const Banner = ({ 
  imageSrc, 
  imageAlt, 
  title, 
  subtitle, 
  className = "" 
}: BannerProps) => {
  return (
    <section className={`relative w-full ${className}`}>
      {/* Banner Image */}
      <div className="">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="object-cover w-full"
        />
        
        {/* Overlay for better text readability if title/subtitle are provided */}
        {(title || subtitle) && (
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        )}
      </div>

      {/* Content overlay */}
      {(title || subtitle) && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            {title && (
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl lg:text-2xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;