import { ExternalLink } from "lucide-react";

interface ChannelCardProps {
  name: string;
  description: string;
  imageUrl: string;
  link?: string;
  bgColor?: string;
}

const ChannelCard = ({ name, description, imageUrl, link, bgColor = "bg-card" }: ChannelCardProps) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`channel-card ${bgColor} group relative transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:brightness-110`}
    >
      {/* Image Container */}
      <div className="aspect-video flex items-center justify-center p-6 relative overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
        />
        {link && (
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
            <ExternalLink className="h-5 w-5 text-foreground drop-shadow-lg" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 transition-all duration-300 group-hover:brightness-110">
        <h3 className="font-bold text-lg text-foreground mb-1 transition-colors duration-300 group-hover:text-accent">{name}</h3>
        <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">{description}</p>
      </div>
    </div>
  );
};

export default ChannelCard;
