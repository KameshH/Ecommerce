import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Table(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      {...props}
    >
      <Path
        d="M27.563 3.938H.438A.438.438 0 000 4.375V7c0 .242.196.438.438.438H1.75v16.187c0 .242.196.438.438.438h1.75a.438.438 0 00.437-.438V7.437h19.25v16.188c0 .242.196.438.438.438h1.75a.438.438 0 00.437-.438V7.437h1.313A.438.438 0 0028 7V4.375a.438.438 0 00-.438-.438zm-.438 2.624h-1.313a.438.438 0 00-.437.438v16.188H24.5V7a.438.438 0 00-.438-.438H3.938A.438.438 0 003.5 7v16.188h-.875V7a.438.438 0 00-.438-.438H.875v-1.75h26.25v1.75z"
        fill="#909090"
      />
    </Svg>
  )
}

export default Table
