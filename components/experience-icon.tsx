import React from 'react';
import { motion, useScroll } from 'framer-motion';

type ExperienceIconProps = {
  reference: React.MutableRefObject<HTMLDivElement | null>;
};

export default function ExperienceIcon({
  reference: divRef,
}: ExperienceIconProps) {
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ['center end', 'center center'],
  }); // 0 - 1
  return (
    <figure className="absolute left-0 stroke-slate-900 dark:stroke-slate-500">
      <svg className="-rotate-90" width={75} height={75} viewBox="0 0 100 100">
        <circle
          cx={75}
          cy={50}
          r={20}
          className="stroke-blue-900 stroke-1 fill-none dark:stroke-blue-500"
        />
        <motion.circle
          cx={75}
          cy={50}
          r={10}
          className="stroke-[5px] fill-blue-100"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx={75}
          cy={50}
          r={20}
          className="animate-pulse stroke-blue-900 stroke-1 fill-none dark:stroke-blue-500"
        />
      </svg>
    </figure>
  );
}
