import * as React from "react"

interface PropsType {
  className?: string
  isScraped: boolean
}

export const ScrapedMark: React.FunctionComponent<PropsType> = ({isScraped, className = ""}) => {
  // 35C5F0
  const pathStroke = isScraped ? "#35C5F0" : "#FFF"
  const fill = isScraped ? "#35C5F0" : "#FFF"
  const fillOpacity = isScraped ? "1" : ".4"

  return (
    <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 24 24">
      <defs>
          <path id="b" d="M12.472 6.93l7.056-3.811A1 1 0 0 1 21 4.002v15.496c0 .83-.672 1.502-1.5 1.502h-15c-.828 0-1.5-.673-1.5-1.502V4.002a1 1 0 0 1 1.472-.883l7.056 3.811a.999.999 0 0 0 .944 0z"/>
          <filter id="a" width="150%" height="150%" x="-25%" y="-25%" filterUnits="objectBoundingBox">
              <feOffset in="SourceAlpha" result="shadowOffsetOuter1"/>
              <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1.5"/>
              <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/>
              <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"/>
          </filter>
          <filter id="c" width="150%" height="150%" x="-25%" y="-25%" filterUnits="objectBoundingBox">
              <feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="1.5"/>
              <feOffset in="shadowBlurInner1" result="shadowOffsetInner1"/>
              <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/>
              <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
          </filter>
      </defs>
      <g fill="none" fillRule="nonzero" transform="matrix(1 0 0 -1 0 24)">
          <use fill="#000" filter="url(#a)" xlinkHref="#b"/>
          <use fill={fill} fillOpacity={fillOpacity} xlinkHref="#b"/>
          <use fill="#000" filter="url(#c)" xlinkHref="#b"/>
          {/* original is square but it was not recognized so use miter */}
          <path stroke={pathStroke} strokeLinejoin="miter" d="M12.71 7.37h-.002a1.5 1.5 0 0 1-1.417 0L4.236 3.56a.499.499 0 0 0-.736.442v15.496c0 .553.448 1.002 1 1.002h15c.552 0 1-.449 1-1.002V4.002a.499.499 0 0 0-.734-.443l-7.057 3.81zm-.475-.88h-.001z"/>
      </g>
    </svg>

  )
}