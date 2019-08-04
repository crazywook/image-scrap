import * as React from "react"
import Styled from "styled-components"

const StyledBlock = Styled.div`
  max-width: 78.5rem;
  width: 100%;
  height: 48.25rem;

  padding-top: 1.875rem;
  padding-bottom: 1.875rem;

  background-color: #ffffff;

  .photo-feed__tool-layout {
    padding-left: 3.6875rem;
    display: flex;
    align-items: center;
  }

  .photo-feed__photo-row {
    padding: 1.875rem 1.25rem 0 3.75rem
    display: flex;
    flex-wrap: wrap;
  }
`

interface PropsType {
  children: React.ReactNode
}

export const PhotoFeedBody: React.FunctionComponent<PropsType> = ({children}) => {
  return (
    <StyledBlock>
      {children}
    </StyledBlock>
  )
}
