import { KeyOfPalette, theme } from '@styles/theme'

const CookIcon = ({ fill = 'aqua_500' }: { fill?: KeyOfPalette }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4856_14626)">
        <path
          d="M7.99907 2C9.27774 2 10.3457 2.9 10.6057 4.10067C11.2885 3.9159 12.0167 4.00992 12.6301 4.36205C13.2435 4.71418 13.692 5.29558 13.8767 5.97833C14.0615 6.66109 13.9675 7.38928 13.6154 8.00271C13.2632 8.61614 12.6818 9.06457 11.9991 9.24933V14H3.99907V9.24933C3.66101 9.15776 3.34429 9.00049 3.067 8.78652C2.78971 8.57254 2.55728 8.30604 2.38299 8.00224C2.20869 7.69844 2.09594 7.36328 2.05117 7.0159C2.00641 6.66853 2.0305 6.31573 2.12207 5.97767C2.21365 5.6396 2.37091 5.32288 2.58489 5.04559C2.79887 4.76831 3.06536 4.53588 3.36917 4.36158C3.67297 4.18729 4.00813 4.07454 4.3555 4.02977C4.70288 3.985 5.05567 4.00909 5.39374 4.10067C5.52296 3.50571 5.85188 2.97289 6.32584 2.59074C6.79979 2.20859 7.39024 2.00013 7.99907 2Z"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.10742 11.339L12.0001 11.333"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4856_14626">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default CookIcon
