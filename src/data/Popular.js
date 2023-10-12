import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Popular (props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_407_3053)">
        <Path
          d="M19.982 7.725a.359.359 0 00-.289-.244l-6.476-.941L10.321.672a.357.357 0 00-.642 0L6.783 6.54l-6.476.941a.359.359 0 00-.199.61l4.687 4.569-1.107 6.45a.359.359 0 00.52.377L10 16.442l5.793 3.045a.36.36 0 00.519-.377l-1.106-6.45 4.686-4.568a.358.358 0 00.09-.367z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_407_3053">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Popular
