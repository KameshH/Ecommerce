import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Homee (props) {
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
        d="M22.5 12.667a.666.666 0 01-.473-.194L12.5 2.94l-9.527 9.533a.666.666 0 01-.94-.94l10-10a.667.667 0 01.94 0l10 10a.666.666 0 01-.473 1.134z"
        fill="#999"
      />
      <Path
        d="M10.5 15.25h-.75v6.667H5.833a.583.583 0 01-.583-.584V13.53l7.252-7.276 7.248 7.23v7.85a.583.583 0 01-.583.583H15.25V15.25H10.5z"
        stroke="#999"
        strokeWidth={1.5}
      />
    </Svg>
  )
}

export default Homee
