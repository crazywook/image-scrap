import * as React from "react"
import Styled from "styled-components"

import {ScrapedMark} from "./images/ScrapedMark"

const StyledScrapedButton = Styled.button`

  position: absolute;
  right: 0.625rem;
  bottom: 0.625rem;

  width: 2rem;
  height: 2rem;

  padding: 0;

  background-color: transparent;
  border: 0;

  outline: none;

  img {
    width: 100%;
  }
`

interface PropsType {
  isScraped: boolean
  onClick: () => void
}

export const ScrapedButton: React.FunctionComponent<PropsType> = ({isScraped, onClick}) => {
  return (
    <StyledScrapedButton
      onClick={onClick}
    >
      <ScrapedMark
        className="scrap-btn__img"
        isScraped={isScraped}
      />
      {/* {isScraped
        ? <span>"scrap"</span>
        : <ScrapedMark
            className="scrap-btn__img"
            isScraped={isScraped}
          />
      } */}
    </StyledScrapedButton>
  )
}
