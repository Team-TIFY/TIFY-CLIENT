import { theme } from '@styles/theme'

interface TagIconProps {
  stroke: 'purple_500' | 'pink_500' | 'aqua_300'
}

const TagIcon = ({ stroke }: TagIconProps) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="icon-season-16" clipPath="url(#clip0_304_2324)">
        <path
          id="Vector"
          d="M11.702 11.1669C10.7643 10.2293 9.49266 9.70264 8.16668 9.70264C6.8407 9.70264 5.56901 10.2293 4.63135 11.1669"
          stroke={`${theme.palette[stroke]}`}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M12 2.53589C11.0813 2.00548 9.98951 1.86174 8.96482 2.13629C7.94012 2.41085 7.06646 3.0812 6.53601 3.99989L13.464 7.99989C13.9944 7.08117 14.1382 5.98939 13.8636 4.9647C13.5891 3.94 12.9187 3.06634 12 2.53589Z"
          stroke={`${theme.palette[stroke]}`}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M11.1547 6.66652C12.26 4.75319 12.638 2.90386 12 2.53586C11.362 2.16786 9.95 3.41986 8.84534 5.33319"
          stroke={`${theme.palette[stroke]}`}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M10 6L8 9.464"
          stroke={`${theme.palette[stroke]}`}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_5"
          d="M2 12.8335C2.20753 12.7303 2.435 12.6735 2.66667 12.6669C2.92633 12.6614 3.18342 12.7193 3.41572 12.8354C3.64802 12.9516 3.84855 13.1225 4 13.3335C4.15145 13.5445 4.35198 13.7155 4.58428 13.8316C4.81658 13.9478 5.07367 14.0056 5.33333 14.0002C5.593 14.0056 5.85008 13.9478 6.08238 13.8316C6.31469 13.7155 6.51522 13.5445 6.66667 13.3335C6.81811 13.1225 7.01865 12.9516 7.25095 12.8354C7.48325 12.7193 7.74034 12.6614 8 12.6669C8.25966 12.6614 8.51675 12.7193 8.74905 12.8354C8.98135 12.9516 9.18189 13.1225 9.33333 13.3335C9.48478 13.5445 9.68531 13.7155 9.91762 13.8316C10.1499 13.9478 10.407 14.0056 10.6667 14.0002C10.9263 14.0056 11.1834 13.9478 11.4157 13.8316C11.648 13.7155 11.8486 13.5445 12 13.3335C12.1514 13.1225 12.352 12.9516 12.5843 12.8354C12.8166 12.7193 13.0737 12.6614 13.3333 12.6669C13.565 12.6735 13.7925 12.7303 14 12.8335"
          stroke={`${theme.palette[stroke]}`}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_304_2324">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default TagIcon
