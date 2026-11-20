'use client'

import { useEffect, useId, useRef } from 'react'
import clsx from 'clsx'

type Star = [x: number, y: number, dim?: boolean, blur?: boolean]

const stars: Array<Star> = [
  [4, 4, true, true],
  [4, 44, true],
  [36, 22],
  [50, 146, true, true],
  [64, 43, true, true],
  [76, 30, true],
  [101, 116],
  [140, 36, true],
  [149, 134],
  [162, 74, true],
  [171, 96, true, true],
  [210, 56, true, true],
  [235, 90],
  [275, 82, true, true],
  [306, 6],
  [307, 64, true, true],
  [380, 68, true],
  [380, 108, true, true],
  [391, 148, true, true],
  [405, 18, true],
  [412, 86, true, true],
  [426, 210, true, true],
  [427, 56, true, true],
  [538, 138],
  [563, 88, true, true],
  [611, 154, true, true],
  [637, 150],
  [651, 146, true],
  [682, 70, true, true],
  [683, 128],
  [781, 82, true, true],
  [785, 158, true],
  [832, 146, true, true],
  [852, 89],
]

const constellations: Array<Array<Star>> = [
  [
    [247, 103],
    [261, 86],
    [307, 104],
    [357, 36],
  ],
  [
    [586, 120],
    [516, 100],
    [491, 62],
    [440, 107],
    [477, 180],
    [516, 100],
  ],
  [
    [733, 100],
    [803, 120],
    [879, 113],
    [823, 164],
    [803, 120],
  ],
]

function StarPoint({
  blurId,
  point: [cx, cy, dim, blur],
}: {
  blurId: string
  point: Star
}) {
  const groupRef = useRef<SVGGElement>(null)
  const ref = useRef<SVGCircleElement>(null)

  useEffect(() => {
    const group = groupRef.current
    const circle = ref.current
    if (!group || !circle) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      group.style.opacity = '1'
      return
    }

    const delay = Math.random() * 2000
    const fadeAnim = group.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 4000,
      delay,
      fill: 'forwards',
    })

    const twinkleAnim = circle.animate(
      dim
        ? [
            { opacity: 0.2, transform: 'scale(1)' },
            { opacity: 0.5, transform: 'scale(1.2)' },
          ]
        : [
            { opacity: 1, transform: 'scale(1.2)' },
            { opacity: 0.6, transform: 'scale(1)' },
          ],
      {
        delay,
        duration: (Math.random() * 2 + 2) * 1000,
        direction: 'alternate',
        iterations: Infinity,
        easing: 'ease-in-out',
      },
    )

    return () => {
      fadeAnim.cancel()
      twinkleAnim.cancel()
    }
  }, [dim])

  return (
    <g ref={groupRef} className="opacity-0">
      <circle
        ref={ref}
        cx={cx}
        cy={cy}
        r={1}
        style={{
          transformOrigin: `${cx / 16}rem ${cy / 16}rem`,
          opacity: dim ? 0.2 : 1,
          transform: `scale(${dim ? 1 : 1.2})`,
        }}
        filter={blur ? `url(#${blurId})` : undefined}
      />
    </g>
  )
}

function Constellation({
  points,
  blurId,
}: {
  points: Array<Star>
  blurId: string
}) {
  const ref = useRef<SVGPathElement>(null)
  const uniquePoints = points.filter(
    (point, pointIndex) =>
      points.findIndex((p) => String(p) === String(point)) === pointIndex,
  )
  const isFilled = uniquePoints.length !== points.length

  useEffect(() => {
    const path = ref.current
    if (!path) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      path.style.visibility = 'visible'
      path.style.strokeDashoffset = '0'
      if (isFilled) path.style.fill = 'rgb(255 255 255 / 0.02)'
      return
    }

    const delay = (Math.random() * 3 + 2) * 1000
    const drawAnim = path.animate(
      [
        { strokeDashoffset: 1, visibility: 'visible' },
        { strokeDashoffset: 0, visibility: 'visible' },
      ],
      { duration: 5000, delay, fill: 'forwards', easing: 'ease-out' },
    )

    let fillAnim: Animation | undefined
    if (isFilled) {
      fillAnim = path.animate(
        [{ fill: 'transparent' }, { fill: 'rgb(255 255 255 / 0.02)' }],
        { duration: 1000, delay: delay + 5000, fill: 'forwards' },
      )
    }

    return () => {
      drawAnim.cancel()
      fillAnim?.cancel()
    }
  }, [isFilled])

  return (
    <>
      <path
        ref={ref}
        stroke="white"
        strokeOpacity="0.2"
        strokeDasharray={1}
        strokeDashoffset={1}
        pathLength={1}
        fill="transparent"
        d={`M ${points.join('L')}`}
        className="invisible"
      />
      {uniquePoints.map((point, pointIndex) => (
        <StarPoint key={pointIndex} point={point} blurId={blurId} />
      ))}
    </>
  )
}

export function StarField({ className }: { className?: string }) {
  const blurId = useId()

  return (
    <svg
      viewBox="0 0 881 211"
      fill="white"
      aria-hidden="true"
      className={clsx(
        'pointer-events-none absolute w-[55.0625rem] origin-top-right rotate-[30deg] overflow-visible opacity-70',
        className,
      )}
    >
      <defs>
        <filter id={blurId}>
          <feGaussianBlur in="SourceGraphic" stdDeviation=".5" />
        </filter>
      </defs>
      {constellations.map((points, constellationIndex) => (
        <Constellation
          key={constellationIndex}
          points={points}
          blurId={blurId}
        />
      ))}
      {stars.map((point, pointIndex) => (
        <StarPoint key={pointIndex} point={point} blurId={blurId} />
      ))}
    </svg>
  )
}
