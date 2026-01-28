import React from 'react';
import { motion } from 'framer-motion';

interface FadeSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const FadeSection: React.FC<FadeSectionProps> = ({ children, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.1 }}
    transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);
