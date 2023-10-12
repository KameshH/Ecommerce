import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Bookmark_Active(props) {
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
        d="M17.912 2H7.147C6.27 2 5.5 2.777 5.5 3.698v17.166c0 .308.08.565.208.763a.79.79 0 00.665.373c.25 0 .516-.12.762-.347l4.817-4.408a.87.87 0 01.584-.215c.222 0 .436.078.585.216l4.8 4.407c.247.227.495.347.745.347.422 0 .834-.351.834-1.136V3.698c0-.92-.712-1.698-1.588-1.698z"
        fill="#4F63AC"
      />
    </Svg>
  )
}

export default Bookmark_Active
