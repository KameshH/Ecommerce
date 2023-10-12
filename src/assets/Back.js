import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Back (props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Path
        d="M13.25 3.5L6.75 10l6.5 6.5"
        stroke="#4F63AC"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Back
