import { KeyOfPalette, theme } from '@styles/theme'

const BowlIcon = ({ fill = 'aqua_500' }: { fill?: KeyOfPalette }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4856_14632)">
        <path
          d="M2.66667 5.33301H13.3333C13.5101 5.33301 13.6797 5.40325 13.8047 5.52827C13.9298 5.65329 14 5.82286 14 5.99967V6.33301C14 7.33301 12.322 10.0483 11.3333 10.6663V11.333C11.3333 11.5098 11.2631 11.6794 11.1381 11.8044C11.013 11.9294 10.8435 11.9997 10.6667 11.9997H5.33333C5.15652 11.9997 4.98695 11.9294 4.86193 11.8044C4.7369 11.6794 4.66667 11.5098 4.66667 11.333V10.6663C3.542 9.96367 2 7.33301 2 6.33301V5.99967C2 5.82286 2.07024 5.65329 2.19526 5.52827C2.32029 5.40325 2.48986 5.33301 2.66667 5.33301Z"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4856_14632">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default BowlIcon
