import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Home_Active(props) {
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
        d="M22.5 12.667a.666.666 0 01-.473-.194L12.5 2.94l-9.527 9.533a.667.667 0 01-.94-.94l10-10a.667.667 0 01.94 0l10 10a.666.666 0 01-.473 1.134z"
        fill="#4F63AC"
      />
      <Path
        d="M12.5 5.193l-8 8.027v8.113a1.333 1.333 0 001.333 1.334H10.5V16h4v6.667h4.667a1.333 1.333 0 001.333-1.334v-8.16l-8-7.98z"
        fill="#4F63AC"
      />
    </Svg>
  )
}

export default Home_Active
