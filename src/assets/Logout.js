import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Logout (props) {
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
        d="M12.513 6.158V5.38a3.071 3.071 0 00-3.07-3.07H5.38a3.07 3.07 0 00-3.07 3.07v9.275a3.07 3.07 0 003.07 3.071h4.07c1.692 0 3.063-1.37 3.063-3.061v-.786M18.175 10.018H8.14M15.734 7.589l2.44 2.429-2.44 2.43"
        stroke="#4F63AC"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Logout
