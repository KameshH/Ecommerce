import * as React from "react"
import Svg, { Path } from "react-native-svg"
import Profile from "../../screens/app/Profile"

function Profilee(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 18s1.5 0 1.5-1.5-1.5-6-9-6-9 4.5-9 6S2 18 2 18h15zM2.008 16.584v-.003.003zm.025-.084h14.934a.379.379 0 00.021-.003l.012-.003c-.002-.369-.231-1.479-1.248-2.496C14.774 13.02 12.933 12 9.5 12c-3.435 0-5.274 1.02-6.252 1.998C2.231 15.015 2.003 16.125 2 16.494l.033.006zm14.961.084v-.003.003zM9.5 7.5a3 3 0 100-6 3 3 0 000 6zm4.5-3a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
        fill="#999"
      />
    </Svg>
  )
}

export default Profilee
