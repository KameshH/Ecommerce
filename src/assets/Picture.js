import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
function Picture(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={357}
      height={209}
      viewBox="0 0 357 209"
      fill="none"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0 0H357V209H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_407_3661"
            transform="matrix(.00024 0 0 .00042 0 -.034)"
          />
        </Pattern>
        <Image
          id="image0_407_3661"
          width={4096}
          height={2560}
        />
      </Defs>
    </Svg>
  )
}
export default Picture