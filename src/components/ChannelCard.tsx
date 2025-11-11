import { ExternalLink } from "lucide-react";

interface ChannelCardProps {
  name: string;
  description: string;
  imageUrl: string;
  link?: string;
  bgColor?: string;
}

const ChannelCard = ({
  name,
  description,
  imageUrl,
  link,
  bgColor = "bg-card",
}: ChannelCardProps) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`channel-card ${bgColor} relative group overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]`}
    >
      {/* Image fills entire card */}
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100"
      />

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
        <h3 className="font-bold text-lg mb-1">{name}</h3>
        <p className="text-sm opacity-90">{description}</p>
      </div>

      {/* Link icon */}
      {link && (
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 z-10">
          <ExternalLink className="h-5 w-5 text-white drop-shadow-lg" />
        </div>
      )}
    </div>
  );
};

export default ChannelCard;
