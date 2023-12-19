import { KeyOfPalette, theme } from '@styles/theme'

const TshirtIcon = ({ fill = 'aqua_500' }: { fill?: KeyOfPalette }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon-tag-16" clipPath="url(#clip0_4856_10345)">
        <path
          id="Vector"
          d="M10 2.6665L14 3.99984V7.33317H12V12.6665C12 12.8433 11.9298 13.0129 11.8047 13.1379C11.6797 13.2629 11.5101 13.3332 11.3333 13.3332H4.66667C4.48986 13.3332 4.32029 13.2629 4.19526 13.1379C4.07024 13.0129 4 12.8433 4 12.6665V7.33317H2V3.99984L6 2.6665C6 3.19694 6.21071 3.70564 6.58579 4.08072C6.96086 4.45579 7.46957 4.6665 8 4.6665C8.53043 4.6665 9.03914 4.45579 9.41421 4.08072C9.78929 3.70564 10 3.19694 10 2.6665Z"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4856_10345">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default TshirtIcon
