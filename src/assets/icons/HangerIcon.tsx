import { KeyOfPalette, theme } from '@styles/theme'

const HangerIcon = ({ fill = 'aqua_500' }: { fill?: KeyOfPalette }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon-tag-16" clipPath="url(#clip0_4856_10340)">
        <path
          id="Vector"
          d="M9.33281 3.99984C9.33281 3.64622 9.19233 3.30708 8.94228 3.05703C8.69223 2.80698 8.3531 2.6665 7.99947 2.6665C7.64585 2.6665 7.30671 2.80698 7.05667 3.05703C6.80662 3.30708 6.66614 3.64622 6.66614 3.99984C6.66614 5.11117 7.11281 5.99984 7.99947 6.6665H7.99414M7.99414 6.6665L13.3081 9.6185C13.5161 9.73399 13.6894 9.90302 13.81 10.108C13.9306 10.3131 13.9942 10.5466 13.9941 10.7845V11.3332C13.9941 11.6868 13.8537 12.0259 13.6036 12.276C13.3536 12.526 13.0144 12.6665 12.6608 12.6665H3.32747C2.97385 12.6665 2.63471 12.526 2.38466 12.276C2.13462 12.0259 1.99414 11.6868 1.99414 11.3332V10.7845C1.99408 10.5466 2.05766 10.3131 2.17828 10.108C2.2989 9.90302 2.47218 9.73399 2.68014 9.6185L7.99414 6.6665Z"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4856_10340">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default HangerIcon
