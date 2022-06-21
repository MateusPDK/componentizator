const Delete = ({ color = "#000", width = "36", height = "36" }) => (
  <svg
    viewBox="0 0 36 36"
    space="preserve"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
  >
    <g>
      <path
        d="M6.2 3.5 3.5 6.2c-.7.7-.7 1.9 0 2.7l9.2 9.2-9.2 9.2c-.7.7-.7 1.9 0 2.7l2.6 2.6c.7.7 1.9.7 2.7 0l9.2-9.2 9.2 9.2c.7.7 1.9.7 2.7 0l2.6-2.6c.7-.7.7-1.9 0-2.7L23.3 18l9.2-9.2c.7-.7.7-1.9 0-2.7l-2.6-2.6c-.7-.7-1.9-.7-2.7 0L18 12.7 8.8 3.5c-.7-.7-1.9-.7-2.6 0z"
        fill={color}
      />
    </g>
  </svg>
);

export default Delete;