import * as React from "react"

interface PropsType {
  className?: string
  checked: boolean
}

export const BtCheckbox: React.FunctionComponent<PropsType> = ({checked}) => {
  const rectFill = checked ? "#35C5F0" : "#FFF"
  const pathFill = checked ? "#FFF" : "#ACACAC"
  const rectStroke = checked ? "" : "#ACACAC"

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="-1.5 -1.5 27 27">
        <g fill="none" fillRule="evenodd">
            <rect width="23" height="23" fill={rectFill} stroke={rectStroke} rx="12"/>
            <path fill={pathFill} fillRule="nonzero" d="M9.885 14.6l7.079-7.296 1.435 1.392L9.956 17.4 5 12.785l1.363-1.464z"/>
        </g>
    </svg>
  )
}
