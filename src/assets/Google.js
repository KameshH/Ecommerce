import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Google (props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={29}
      height={29}
      viewBox="0 0 29 29"
      fill="none"
      {...props}
    >
      <Path
        d="M14.167 11.333V17h8.015c-1.17 3.298-4.32 5.667-8.015 5.667-4.687 0-8.5-3.814-8.5-8.5 0-4.687 3.813-8.5 8.5-8.5 2.031 0 3.986.728 5.505 2.051l3.723-4.273A14.04 14.04 0 0014.167 0C6.355 0 0 6.355 0 14.167c0 7.811 6.355 14.166 14.167 14.166 7.811 0 14.167-6.355 14.167-14.166v-2.834H14.167z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Google
