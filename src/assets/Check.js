import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={9}
      viewBox="0 0 12 9"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.172 6.9L10.966 0 12 1.05 4.172 9 0 4.763l1.034-1.05L4.172 6.9z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
