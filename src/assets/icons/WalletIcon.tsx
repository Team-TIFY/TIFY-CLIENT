import { KeyOfPalette, theme } from '@styles/theme'

const WalletIcon = ({ fill = 'aqua_500' }: { fill?: KeyOfPalette }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon-tag-16" clipPath="url(#clip0_4856_12759)">
        <path
          id="Vector"
          d="M11.3327 5.33317V3.33317C11.3327 3.15636 11.2624 2.98679 11.1374 2.86177C11.0124 2.73674 10.8428 2.6665 10.666 2.6665H3.99935C3.64573 2.6665 3.30659 2.80698 3.05654 3.05703C2.80649 3.30708 2.66602 3.64622 2.66602 3.99984M2.66602 3.99984C2.66602 4.35346 2.80649 4.6926 3.05654 4.94265C3.30659 5.19269 3.64573 5.33317 3.99935 5.33317H11.9993C12.1762 5.33317 12.3457 5.40341 12.4708 5.52843C12.5958 5.65346 12.666 5.82303 12.666 5.99984V7.99984M2.66602 3.99984V11.9998C2.66602 12.3535 2.80649 12.6926 3.05654 12.9426C3.30659 13.1927 3.64573 13.3332 3.99935 13.3332H11.9993C12.1762 13.3332 12.3457 13.2629 12.4708 13.1379C12.5958 13.0129 12.666 12.8433 12.666 12.6665V10.6665"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M13.334 8V10.6667H10.6673C10.3137 10.6667 9.97456 10.5262 9.72451 10.2761C9.47446 10.0261 9.33398 9.68696 9.33398 9.33333C9.33398 8.97971 9.47446 8.64057 9.72451 8.39052C9.97456 8.14048 10.3137 8 10.6673 8H13.334Z"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4856_12759">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default WalletIcon
