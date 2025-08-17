import { motion } from "framer-motion";

export default function Section({
  id,
  kicker,
  title,
  children,
  className = ""
}: {
  id?: string;
  kicker?: string;
  title?: string | JSX.Element;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 py-16 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {kicker && <div className="text-xs uppercase tracking-[0.2em] text-amber-400/80">{kicker}</div>}
        {title && <h2 className="mt-2 font-display text-3xl md:text-4xl">{title}</h2>}
        <div className="mt-6">{children}</div>
      </motion.div>
    </section>
  );
}
