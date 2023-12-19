import { KeyOfPalette, theme } from '@styles/theme'

const FlareIcon = ({ fill = 'aqua_500' }: { fill?: KeyOfPalette }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon-tag-16" clipPath="url(#clip0_4856_9965)">
        <path
          id="Vector"
          d="M8 2L10 6L14 8L10 10L8 14L6 10L2 8L6 6L8 2Z"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4856_9965">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default FlareIcon
