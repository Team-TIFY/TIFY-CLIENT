import { KeyOfPalette, theme } from '@styles/theme'

const BagIcon = ({ fill = 'aqua_500' }: { fill?: KeyOfPalette }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon-tag-16" clipPath="url(#clip0_4856_10296)">
        <path
          id="Vector"
          d="M4.22021 5.3335H11.7795C11.9718 5.33347 12.1618 5.37502 12.3365 5.4553C12.5111 5.53557 12.6664 5.65267 12.7916 5.79856C12.9168 5.94446 13.0089 6.1157 13.0617 6.30055C13.1146 6.4854 13.1268 6.67948 13.0975 6.8695L12.2609 12.3042C12.1882 12.7765 11.9489 13.2071 11.5862 13.5182C11.2235 13.8293 10.7614 14.0003 10.2835 14.0002H5.71555C5.23781 14.0001 4.77586 13.8291 4.4133 13.518C4.05073 13.2069 3.81149 12.7763 3.73888 12.3042L2.90221 6.8695C2.87299 6.67948 2.8852 6.4854 2.93801 6.30055C2.99083 6.1157 3.08299 5.94446 3.20818 5.79856C3.33336 5.65267 3.48862 5.53557 3.66331 5.4553C3.83799 5.37502 4.02797 5.33347 4.22021 5.3335Z"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M6 7.33333V4C6 3.46957 6.21071 2.96086 6.58579 2.58579C6.96086 2.21071 7.46957 2 8 2C8.53043 2 9.03914 2.21071 9.41421 2.58579C9.78929 2.96086 10 3.46957 10 4V7.33333"
          stroke={theme.palette[fill]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4856_10296">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default BagIcon
