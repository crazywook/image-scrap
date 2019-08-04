import * as React from "react"
import Styled from "styled-components"

import {BtCheckbox} from "./images/BtCheckbox"

const StyledScrapToggle = Styled.div`
  height: 1.5rem;
  display: flex;
  align-items: center;

  label {
    margin-left: 0.375rem;
  }
`

interface PropsType {
  checked: boolean
  handleClick: (currentChecked: boolean) => void
}

export const ScrapToggle: React.FunctionComponent<PropsType> = ({checked, handleClick}) => {
  return (
    <StyledScrapToggle
      onClick={buildOnScrapToggleClick(checked, handleClick)}
    >
      <BtCheckbox checked={checked} />
      <label>스크랩한 것만 보기</label>
    </StyledScrapToggle>
  )
}

function buildOnScrapToggleClick(currentChecked: boolean, cb: (currentChecked: boolean) => void) {
  return () => cb(currentChecked)
}
