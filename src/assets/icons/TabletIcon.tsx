import { KeyOfPalette, theme } from '@styles/theme'

const TabletIcon = ({ fill = 'aqua_500' }: { fill?: KeyOfPalette }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon-tag-16" clipPath="url(#clip0_5012_7083)">
        <path
          id="Vector"
          d="M6.33333 12.2H9.66667M11.3333 2C11.7585 1.99997 12.1675 2.1754 12.4768 2.49037C12.7861 2.80535 12.9723 3.23606 12.9972 3.6944L13 3.8V12.2C13 12.6591 12.8376 13.1009 12.546 13.435C12.2543 13.769 11.8555 13.9701 11.4311 13.997L11.3333 14H4.66667C4.24155 14 3.83249 13.8246 3.52319 13.5096C3.21389 13.1947 3.02772 12.7639 3.00278 12.3056L3 12.2V3.8C2.99998 3.34087 3.1624 2.89909 3.45405 2.56504C3.74569 2.231 4.1445 2.02994 4.56889 2.003L4.66667 2H11.3333Z"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5012_7083">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default TabletIcon
