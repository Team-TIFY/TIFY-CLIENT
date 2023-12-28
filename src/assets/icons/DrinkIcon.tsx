import { KeyOfPalette, theme } from '@styles/theme'

const DrinkIcon = ({ fill = 'aqua_500' }: { fill?: KeyOfPalette }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon-tag-16" clipPath="url(#clip0_4856_4670)">
        <path
          id="Vector"
          d="M5.33303 2C5.12204 2.15145 4.95108 2.35198 4.83493 2.58428C4.71878 2.81658 4.66093 3.07367 4.66637 3.33333C4.66093 3.593 4.71878 3.85008 4.83493 4.08238C4.95108 4.31469 5.12204 4.51522 5.33303 4.66667"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M7.99905 2C7.78805 2.15145 7.6171 2.35198 7.50095 2.58428C7.3848 2.81658 7.32694 3.07367 7.33238 3.33333C7.32694 3.593 7.3848 3.85008 7.50095 4.08238C7.6171 4.31469 7.78805 4.51522 7.99905 4.66667"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M2 6.66699H11.3333V10.0003C11.3333 11.0612 10.9119 12.0786 10.1618 12.8288C9.41162 13.5789 8.3942 14.0003 7.33333 14.0003H6C4.93913 14.0003 3.92172 13.5789 3.17157 12.8288C2.42143 12.0786 2 11.0612 2 10.0003V6.66699Z"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M11.1641 11.1506C11.4618 11.2873 11.7885 11.3488 12.1156 11.3296C12.4426 11.3104 12.76 11.2112 13.0397 11.0406C13.3194 10.8701 13.5529 10.6334 13.7197 10.3515C13.8866 10.0695 13.9816 9.75091 13.9964 9.42364C14.0113 9.09638 13.9455 8.77047 13.8049 8.47458C13.6643 8.17868 13.4531 7.92186 13.19 7.72669C12.9269 7.53151 12.6198 7.40396 12.2959 7.35524C11.9719 7.30653 11.6409 7.33814 11.3321 7.4473"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4856_4670">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default DrinkIcon
