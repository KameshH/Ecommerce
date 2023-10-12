import * as React from "react"
import Svg, {
  Mask,
  Rect,
  G,
  Path,
  Defs,
  Pattern,
  Use,
  Image
} from "react-native-svg"
function BlackLamp (props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={157}
      height={200}
      viewBox="0 0 157 200"
      fill="none"
      {...props}
    >
      <Mask
        id="a"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={157}
        height={200}
      >
        <Rect width={157} height={200} rx={10} fill="#C4C4C4" />
      </Mask>
      <G mask="url(#a)">
        <Path fill="url(#pattern0)" d="M0 -36H157V200H0z" />
      </G>
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_407_3035"
            transform="matrix(.00037 0 0 .00024 -.001 0)"
          />
        </Pattern>
        <Image
          id="image0_407_3035"
          width={2731}
          height={4096}
        />
      </Defs>
    </Svg>
  )
}
export default BlackLamp