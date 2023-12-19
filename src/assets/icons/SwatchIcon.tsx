import { KeyOfPalette, theme } from '@styles/theme'

const SwatchIcon = ({ fill = 'aqua_500' }: { fill?: KeyOfPalette }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon-tag-16" clipPath="url(#clip0_4856_10074)">
        <path
          id="Vector"
          d="M12.666 2H9.99935C9.64573 2 9.30659 2.14048 9.05654 2.39052C8.80649 2.64057 8.66602 2.97971 8.66602 3.33333V11.3333C8.66602 12.0406 8.94697 12.7189 9.44706 13.219C9.94716 13.719 10.6254 14 11.3327 14C12.0399 14 12.7182 13.719 13.2183 13.219C13.7184 12.7189 13.9993 12.0406 13.9993 11.3333V3.33333C13.9993 2.97971 13.8589 2.64057 13.6088 2.39052C13.3588 2.14048 13.0196 2 12.666 2Z"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M8.66626 4.89998L7.33292 3.56665C7.08289 3.31669 6.74381 3.17627 6.39026 3.17627C6.03671 3.17627 5.69763 3.31669 5.44759 3.56665L3.56226 5.45199C3.3123 5.70202 3.17187 6.0411 3.17188 6.39465C3.17187 6.7482 3.3123 7.08728 3.56226 7.33732L9.56226 13.3373"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M4.86667 8.66669H3.33333C2.97971 8.66669 2.64057 8.80716 2.39052 9.05721C2.14048 9.30726 2 9.6464 2 10V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H11.3333"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M11.334 11.3333V11.34"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4856_10074">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SwatchIcon
