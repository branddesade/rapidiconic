export function MeskaLogo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="40 40 1825 414"
      fill="currentColor"
      aria-label="Meska IT"
      {...props}
    >
      <path d="M 45 113 L 179 242 L 313 113 L 313 381 L 264 381 L 264 227 L 179 310 L 93 227 L 93 381 L 45 381 Z" />
      <path
        fillRule="evenodd"
        d="M 314 113 L 582 113 L 582 161 L 428 161 L 510 248 L 427 333 L 705 333 L 751 271 L 585 271 L 704 113 L 899 113 L 899 214 L 1120 113 L 1120 166 L 946 246 L 956 253 L 1120 328 L 1120 236 L 1389 113 L 1389 381 L 1169 285 L 1169 381 L 1120 381 L 901 280 L 901 381 L 851 381 L 851 161 L 728 161 L 682 223 L 849 223 L 729 381 L 314 381 L 442 248 Z M 1340 189 L 1209 250 L 1340 307 Z"
      />
      <path
        fillRule="evenodd"
        d="M 1452 46 L 1859 46 L 1859 448 L 1452 448 Z M 1640 113 L 1640 213 L 1532 131 L 1532 374 L 1565 374 L 1565 199 L 1640 255 L 1640 374 L 1675 374 L 1675 283 L 1784 365 L 1783 132 L 1675 212 L 1675 113 Z M 1749 199 L 1749 297 L 1685 248 Z"
      />
    </svg>
  )
}

export function MeskaEmblem(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="1452 46 407 402"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M 1452 46 L 1859 46 L 1859 448 L 1452 448 Z M 1640 113 L 1640 213 L 1532 131 L 1532 374 L 1565 374 L 1565 199 L 1640 255 L 1640 374 L 1675 374 L 1675 283 L 1784 365 L 1783 132 L 1675 212 L 1675 113 Z M 1749 199 L 1749 297 L 1685 248 Z"
      />
    </svg>
  )
}

export const Logo = MeskaLogo
