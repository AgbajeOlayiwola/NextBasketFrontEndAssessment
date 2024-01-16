const YoutubWhiteIconSvg = ({
  fill,
  width,
  height,
}: {
  fill: string
  width: number
  height: number
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill}
    >
      <g clipPath="url(#clip0_540_719)">
        <path
          d="M9.051 1.99902H9.14C9.962 2.00202 14.127 2.03202 15.25 2.33402C15.5895 2.42619 15.8989 2.60585 16.1472 2.85503C16.3955 3.10422 16.574 3.41421 16.665 3.75402C16.766 4.13402 16.837 4.63702 16.885 5.15602L16.895 5.26002L16.917 5.52002L16.925 5.62402C16.99 6.53802 16.998 7.39402 16.999 7.58102V7.65602C16.998 7.85002 16.989 8.76402 16.917 9.71602L16.909 9.82102L16.9 9.92502C16.85 10.497 16.776 11.065 16.665 11.483C16.5743 11.823 16.3958 12.1331 16.1475 12.3823C15.8991 12.6316 15.5896 12.8111 15.25 12.903C14.09 13.215 9.681 13.237 9.07 13.238H8.928C8.619 13.238 7.341 13.232 6.001 13.186L5.831 13.18L5.744 13.176L5.573 13.169L5.402 13.162C4.292 13.113 3.235 13.034 2.748 12.902C2.40849 12.8102 2.09907 12.6308 1.85072 12.3818C1.60238 12.1327 1.42385 11.8228 1.333 11.483C1.222 11.066 1.148 10.497 1.098 9.92502L1.09 9.82002L1.082 9.71602C1.03265 9.03842 1.0053 8.3594 1 7.68002L1 7.55702C1.002 7.34202 1.01 6.59902 1.064 5.77902L1.071 5.67602L1.074 5.62402L1.082 5.52002L1.104 5.26002L1.114 5.15602C1.162 4.63702 1.233 4.13302 1.334 3.75402C1.42469 3.41407 1.60316 3.10393 1.85151 2.85471C2.09986 2.60548 2.40937 2.42592 2.749 2.33402C3.236 2.20402 4.293 2.12402 5.403 2.07402L5.573 2.06702L5.745 2.06102L5.831 2.05802L6.002 2.05102C6.95371 2.0204 7.90581 2.0034 8.858 2.00002H9.051V1.99902ZM7.4 5.20902V10.027L11.557 7.61902L7.4 5.20902Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_540_719">
          <rect width="16" height="16" fill={fill} transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default YoutubWhiteIconSvg
