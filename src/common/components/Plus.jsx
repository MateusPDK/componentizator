const Plus = ({ color = "#0f110cff", width = "36", height = "36" }) => (
  <svg
    viewBox="0 0 36 36"
    space="preserve"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
  >
    <g>
      <path
        d="M19.6 2h-3.2c-.9 0-1.6.7-1.6 1.6v11.2H3.6c-.9 0-1.6.7-1.6 1.6v3.2c0 .9.7 1.6 1.6 1.6h11.2v11.2c0 .9.7 1.6 1.6 1.6h3.2c.9 0 1.6-.7 1.6-1.6V21.2h11.2c.9 0 1.6-.7 1.6-1.6v-3.2c0-.9-.7-1.6-1.6-1.6H21.2V3.6c0-.9-.7-1.6-1.6-1.6z"
        fill={color}
      />
    </g>
  </svg>
);

export default Plus;