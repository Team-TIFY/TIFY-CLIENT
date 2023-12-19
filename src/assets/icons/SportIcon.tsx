import { KeyOfPalette, theme } from '@styles/theme'

const SportIcon = ({ fill = 'aqua_500' }: { fill?: KeyOfPalette }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4856_3934)">
        <path
          d="M7.33398 2.66667C7.33398 2.84348 7.40422 3.01305 7.52925 3.13807C7.65427 3.2631 7.82384 3.33333 8.00065 3.33333C8.17746 3.33333 8.34703 3.2631 8.47206 3.13807C8.59708 3.01305 8.66732 2.84348 8.66732 2.66667C8.66732 2.48986 8.59708 2.32029 8.47206 2.19526C8.34703 2.07024 8.17746 2 8.00065 2C7.82384 2 7.65427 2.07024 7.52925 2.19526C7.40422 2.32029 7.33398 2.48986 7.33398 2.66667Z"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.66602 13.333H5.33268L6.33268 11.333"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.334 13.333L10.6673 9.99967H7.33398L8.00065 5.33301"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.66602 6.66634L5.33268 5.99967L7.99935 5.33301L10.666 6.33301L13.3327 7.33301"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4856_3934">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SportIcon
