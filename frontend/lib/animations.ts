// lib/animations.ts

export const transitions = {
  luxury: {
    ease: [0.25, 1, 0.5, 1],    // Slow start, smooth deceleration
    duration: 1.2
  },
  quick: {
    ease: [0.4, 0, 0.2, 1],     // Standard material
    duration: 0.4
  },
  spring: {
    type: "spring",
    stiffness: 100,
    damping: 20
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: transitions.luxury
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export const imageReveal = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { ...transitions.luxury, duration: 1.5 }
  }
};

export const horizontalScroll = {
  drag: "x" as const,
  dragConstraints: { left: 0, right: 0 },
  dragElastic: 0.1
};