import { KeyOfPalette, theme } from '@styles/theme'

const PerfumeIcon = ({ fill = 'aqua_500' }: { fill?: KeyOfPalette }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon-tag-16" clipPath="url(#clip0_4856_10853)">
        <path
          id="Vector"
          d="M6.66797 4V6"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M9.33203 4V6"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M3.33203 7.33333C3.33203 6.97971 3.47251 6.64057 3.72256 6.39052C3.9726 6.14048 4.31174 6 4.66536 6H11.332C11.6857 6 12.0248 6.14048 12.2748 6.39052C12.5249 6.64057 12.6654 6.97971 12.6654 7.33333V12.6667C12.6654 13.0203 12.5249 13.3594 12.2748 13.6095C12.0248 13.8595 11.6857 14 11.332 14H4.66536C4.31174 14 3.9726 13.8595 3.72256 13.6095C3.47251 13.3594 3.33203 13.0203 3.33203 12.6667V7.33333Z"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M6.66797 10C6.66797 10.3536 6.80844 10.6928 7.05849 10.9428C7.30854 11.1929 7.64768 11.3334 8.0013 11.3334C8.35492 11.3334 8.69406 11.1929 8.94411 10.9428C9.19416 10.6928 9.33464 10.3536 9.33464 10C9.33464 9.6464 9.19416 9.30726 8.94411 9.05721C8.69406 8.80716 8.35492 8.66669 8.0013 8.66669C7.64768 8.66669 7.30854 8.80716 7.05849 9.05721C6.80844 9.30726 6.66797 9.6464 6.66797 10Z"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_5"
          d="M6 2H10V4H6V2Z"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4856_10853">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default PerfumeIcon
