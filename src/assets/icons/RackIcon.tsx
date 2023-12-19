import { KeyOfPalette, theme } from '@styles/theme'

const RackIcon = ({ fill = 'aqua_500' }: { fill?: KeyOfPalette }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon-tag-16" clipPath="url(#clip0_4856_10316)">
        <path
          id="Vector"
          d="M6.66602 3.33333C6.66602 3.68696 6.80649 4.02609 7.05654 4.27614C7.30659 4.52619 7.64573 4.66667 7.99935 4.66667C8.35297 4.66667 8.69211 4.52619 8.94216 4.27614C9.19221 4.02609 9.33268 3.68696 9.33268 3.33333C9.33268 2.97971 9.19221 2.64057 8.94216 2.39052C8.69211 2.14048 8.35297 2 7.99935 2C7.64573 2 7.30659 2.14048 7.05654 2.39052C6.80649 2.64057 6.66602 2.97971 6.66602 3.33333Z"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M8 4.6665V13.9998"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M6 14H10"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M5.17188 6.16211C5.54332 6.53362 5.98431 6.82831 6.46965 7.02938C6.955 7.23044 7.4752 7.33392 8.00054 7.33392C8.52589 7.33392 9.04609 7.23044 9.53143 7.02938C10.0168 6.82831 10.4578 6.53362 10.8292 6.16211"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4856_10316">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default RackIcon
