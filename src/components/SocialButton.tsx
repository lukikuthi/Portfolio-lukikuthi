import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialButtonProps {
  icon: LucideIcon;
  href: string;
  label: string;
  className?: string;
}

const SocialButton = ({ icon: Icon, href, label, className }: SocialButtonProps) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "relative flex h-12 w-12 items-center justify-center rounded-xl overflow-hidden glass transition-all duration-500",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Mouse follow light */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(80px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--glow-primary) / 0.3), transparent 50%)`,
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <Icon className="relative z-10 h-5 w-5 text-foreground transition-colors duration-300" />

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          boxShadow: "inset 0 0 20px hsl(var(--glow-primary) / 0.2)",
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
};

export default SocialButton;
