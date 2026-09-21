'use client'

import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion'

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} reducedMotion="user">
        {children}
      </MotionConfig>
    </LazyMotion>
  )
}
