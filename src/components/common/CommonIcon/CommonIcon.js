import React, { memo } from "react"

import { IconWrapper, Svg } from "./styled"

const reqSvgs = require.context(
  "!!svg-sprite-loader!../../../assets/images",
  false,
  /\.svg$/
)

// clean all up to obtain an object who looks like:
// {"./logo.svg": "/static/media/logo.83ae646d.svg"}
const svgs = reqSvgs.keys().reduce((images, path) => {
  const svg = reqSvgs(path).default
  images[svg.id] = svg
  return images
}, {})

const CommonIcon = ({ name, inline, raw, className, fill, ...otherProps }) => {
  let wrapperClass = ""
  let svgClass = ""

  if (raw) {
    svgClass = className
  } else {
    wrapperClass = className
  }

  const { id, viewBox: viewBoxLoader } = svgs[name]
  const viewBoxArray = viewBoxLoader.split(/[\s,]+/)
  const widthRatio = viewBoxArray[2] / viewBoxArray[3]

  const Inner = (
    <Svg
      isRaw={raw}
      fill={fill}
      viewBox={viewBoxLoader}
      xmlns="http://www.w3.org/2000/svg"
      className={svgClass}
      {...otherProps}
    >
      <use xlinkHref={`#${id}`} />
    </Svg>
  )

  return raw ? (
    <>{Inner}</>
  ) : (
    <IconWrapper isInline={inline} ratio={widthRatio} className={wrapperClass}>
      {Inner}
    </IconWrapper>
  )
}

export default memo(CommonIcon)
