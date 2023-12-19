import { KeyOfPalette, theme } from '@styles/theme'

const CookieManIcon = ({ fill = 'aqua_500' }: { fill?: KeyOfPalette }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4856_12143)">
        <path
          d="M8.00083 1.33331C8.71138 1.33325 9.40335 1.56024 9.9758 1.98117C10.5482 2.4021 10.9712 2.99494 11.183 3.67319C11.3947 4.35145 11.3842 5.07963 11.153 5.75149C10.9217 6.42335 10.4818 7.00374 9.8975 7.40798L9.9955 7.65398L11.1655 7.11865C11.8115 6.82331 12.5788 7.09731 12.8795 7.73065C13.0155 8.01836 13.0369 8.34703 12.9395 8.64999C12.8421 8.95294 12.633 9.20748 12.3548 9.36198L12.2562 9.41265L10.6675 10.1386V11.4853L11.6182 12.4353L11.6942 12.5186C11.9054 12.7689 12.015 13.0894 12.0011 13.4166C11.9873 13.7438 11.8512 14.0538 11.6196 14.2854C11.388 14.517 11.0779 14.6531 10.7507 14.667C10.4235 14.6808 10.1031 14.5712 9.85283 14.36L9.7695 14.284L8.3835 12.8973L8.3075 12.8146C8.26835 12.7683 8.23249 12.7193 8.20016 12.668H7.80083C7.7695 12.718 7.7335 12.768 7.69416 12.8146L7.6175 12.898L6.23083 14.284C5.99283 14.523 5.6716 14.6608 5.33435 14.6684C4.9971 14.676 4.66997 14.553 4.42142 14.3249C4.17286 14.0968 4.02213 13.7815 4.00077 13.4448C3.97941 13.1082 4.08908 12.7763 4.30683 12.5186L4.38283 12.4353L5.33416 11.4846V10.1386L3.7455 9.41198L3.64683 9.36198C3.36861 9.20748 3.15958 8.95294 3.06214 8.64999C2.96471 8.34703 2.98617 8.01836 3.12216 7.73065C3.40816 7.12931 4.11483 6.85198 4.73816 7.07865L4.83616 7.11865L6.00616 7.65398L6.10416 7.40798C5.68103 7.11516 5.33144 6.72835 5.08277 6.27785C4.8341 5.82735 4.69311 5.3254 4.67083 4.81131V4.66665C4.67083 3.78259 5.02202 2.93474 5.64714 2.30962C6.27226 1.6845 7.12011 1.33331 8.00416 1.33331H8.00083Z"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 10.6667H8.00667"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 8.66669H8.00667"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.66602 4.66669H6.67268"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.33398 4.66669H9.34065"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 6H8.00667"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4856_12143">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default CookieManIcon
