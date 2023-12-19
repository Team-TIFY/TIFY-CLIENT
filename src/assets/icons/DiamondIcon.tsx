import { KeyOfPalette, theme } from '@styles/theme'

const DiamondIcon = ({ fill = 'aqua_500' }: { fill?: KeyOfPalette }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon-tag-16" clipPath="url(#clip0_4856_9953)">
        <path
          id="Vector"
          d="M4 3.3335H12L14 6.66683L8.33333 13.0002C8.28988 13.0445 8.23802 13.0797 8.18078 13.1038C8.12355 13.1278 8.06209 13.1402 8 13.1402C7.93792 13.1402 7.87645 13.1278 7.81922 13.1038C7.76198 13.0797 7.71012 13.0445 7.66667 13.0002L2 6.66683L4 3.3335Z"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M6.66536 8.00003L5.33203 6.53337L5.73203 5.8667"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4856_9953">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default DiamondIcon
