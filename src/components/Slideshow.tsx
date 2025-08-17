import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  images: string[];
  intervalMs?: number; // default 3000
  className?: string;
  rounded?: string; // tailwind rounded class
};

export default function Slideshow({
  images,
  intervalMs = 3000,
  className = "",
  rounded = "rounded-2xl",
}: Props) {
  const [i, setI] = useState(0);
  const paused = useRef(false);

  const order = useMemo(() => images.filter(Boolean), [images]);

  useEffect(() => {
    if (order.length <= 1) return;
    const id = setInterval(() => {
      if (!paused.current) setI((v) => (v + 1) % order.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [order.length, intervalMs]);

  if (order.length === 0) return null;

  return (
    <div
      className={`relative overflow-hidden border border-white/10 shadow-soft ${rounded} ${className}`}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-black/10 pointer-events-none" />

      <AnimatePresence mode="popLayout">
        <motion.img
          key={order[i]}
          src={order[i]}
          alt="Iron Lions robot"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="block h-[14rem] md:h-[20rem] lg:h-[24rem] w-full object-cover select-none"
          draggable={false}
        />
      </AnimatePresence>

      <div className="absolute bottom-3 right-4 flex gap-2">
        {order.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === idx ? "bg-blue-400" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
