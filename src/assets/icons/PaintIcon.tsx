import { KeyOfPalette, theme } from '@styles/theme'

const PaintIcon = ({ fill = 'aqua_500' }: { fill?: KeyOfPalette }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon-tag-16" clipPath="url(#clip0_4856_10087)">
        <path
          id="Vector"
          d="M3.33398 3.33333C3.33398 2.97971 3.47446 2.64057 3.72451 2.39052C3.97456 2.14048 4.3137 2 4.66732 2H11.334C11.6876 2 12.0267 2.14048 12.2768 2.39052C12.5268 2.64057 12.6673 2.97971 12.6673 3.33333V4.66667C12.6673 5.02029 12.5268 5.35943 12.2768 5.60948C12.0267 5.85952 11.6876 6 11.334 6H4.66732C4.3137 6 3.97456 5.85952 3.72451 5.60948C3.47446 5.35943 3.33398 5.02029 3.33398 4.66667V3.33333Z"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M12.6667 4H13.3333C13.687 4 14.0261 4.14048 14.2761 4.39052C14.5262 4.64057 14.6667 4.97971 14.6667 5.33333C14.6667 6.21739 14.3155 7.06523 13.6904 7.69036C13.0652 8.31548 12.2174 8.66667 11.3333 8.66667H8V10"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M6.66602 10.6667C6.66602 10.4899 6.73625 10.3203 6.86128 10.1953C6.9863 10.0702 7.15587 10 7.33268 10H8.66602C8.84283 10 9.0124 10.0702 9.13742 10.1953C9.26244 10.3203 9.33268 10.4899 9.33268 10.6667V13.3333C9.33268 13.5101 9.26244 13.6797 9.13742 13.8047C9.0124 13.9298 8.84283 14 8.66602 14H7.33268C7.15587 14 6.9863 13.9298 6.86128 13.8047C6.73625 13.6797 6.66602 13.5101 6.66602 13.3333V10.6667Z"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4856_10087">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default PaintIcon
