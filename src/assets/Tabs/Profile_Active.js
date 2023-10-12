import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Profile_Active(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 21s-1.5 0-1.5-1.5 1.5-6 9-6 9 4.5 9 6S20 21 20 21H5zm7.5-9a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
        fill="#4F63AC"
      />
    </Svg>
  )
}

export default Profile_Active
