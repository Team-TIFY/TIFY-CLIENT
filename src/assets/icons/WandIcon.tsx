import { KeyOfPalette, theme } from '@styles/theme'

const WandIcon = ({ fill = 'aqua_500' }: { fill?: KeyOfPalette }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon-tag-16" clipPath="url(#clip0_5012_7088)">
        <path
          id="Vector"
          d="M4 14L14 4L12 2L2 12L4 14Z"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M10 4L12 6"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M5.99935 2C5.99935 2.35362 6.13983 2.69276 6.38987 2.94281C6.63992 3.19286 6.97906 3.33333 7.33268 3.33333C6.97906 3.33333 6.63992 3.47381 6.38987 3.72386C6.13983 3.97391 5.99935 4.31304 5.99935 4.66667C5.99935 4.31304 5.85887 3.97391 5.60882 3.72386C5.35878 3.47381 5.01964 3.33333 4.66602 3.33333C5.01964 3.33333 5.35878 3.19286 5.60882 2.94281C5.85887 2.69276 5.99935 2.35362 5.99935 2Z"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M12.6673 8.6665C12.6673 9.02013 12.8078 9.35926 13.0578 9.60931C13.3079 9.85936 13.647 9.99984 14.0007 9.99984C13.647 9.99984 13.3079 10.1403 13.0578 10.3904C12.8078 10.6404 12.6673 10.9795 12.6673 11.3332C12.6673 10.9795 12.5268 10.6404 12.2768 10.3904C12.0267 10.1403 11.6876 9.99984 11.334 9.99984C11.6876 9.99984 12.0267 9.85936 12.2768 9.60931C12.5268 9.35926 12.6673 9.02013 12.6673 8.6665Z"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5012_7088">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default WandIcon
