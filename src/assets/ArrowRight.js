import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowRight = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 8 14"
    fill="none"
    {...props}
  >
    <Path
      d="M1 13L7 7L0.999999 1"
      stroke="#4F63AC"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ArrowRight;
