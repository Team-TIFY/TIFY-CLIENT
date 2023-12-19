import { KeyOfPalette, theme } from '@styles/theme'

const EarphoneIcon = ({ fill = 'aqua_500' }: { fill?: KeyOfPalette }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon-tag-16" clipPath="url(#clip0_5012_7064)">
        <path
          id="Vector"
          d="M4.00065 2.66651C4.68539 2.66565 5.34422 2.92823 5.84065 3.39984C6.33709 3.87145 6.63308 4.51596 6.66732 5.19984V5.33317V12.3332C6.66732 12.5984 6.56196 12.8527 6.37442 13.0403C6.18689 13.2278 5.93253 13.3332 5.66732 13.3332C5.4021 13.3332 5.14775 13.2278 4.96021 13.0403C4.77267 12.8527 4.66732 12.5984 4.66732 12.3332V7.99984H4.00065C3.31591 8.0007 2.65709 7.73812 2.16065 7.26651C1.66422 6.79489 1.36822 6.15039 1.33398 5.46651V5.33317C1.33398 4.62593 1.61494 3.94765 2.11503 3.44755C2.61513 2.94746 3.29341 2.66651 4.00065 2.66651Z"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M12.0007 2.66651C11.3159 2.66565 10.6571 2.92823 10.1607 3.39984C9.66422 3.87145 9.36822 4.51596 9.33398 5.19984V5.33317V12.3332C9.33398 12.5984 9.43934 12.8527 9.62688 13.0403C9.81441 13.2278 10.0688 13.3332 10.334 13.3332C10.5992 13.3332 10.8536 13.2278 11.0411 13.0403C11.2286 12.8527 11.334 12.5984 11.334 12.3332V7.99984H12.0007C12.6854 8.0007 13.3442 7.73812 13.8407 7.26651C14.3371 6.79489 14.6331 6.15039 14.6673 5.46651V5.33317C14.6673 4.62593 14.3864 3.94765 13.8863 3.44755C13.3862 2.94746 12.7079 2.66651 12.0007 2.66651Z"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5012_7064">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default EarphoneIcon
