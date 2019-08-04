import * as React from "react"
import Styled from "styled-components"

import {PhotoDto} from "../../containers/aphotoFeed/types"
import {ScrapedButton} from "./ScrapedButton"

// import icAvatarCat from "./images/ic-avatar-cat@3x.png"
interface StyledProps {

  photoUrl: string
}

const StyledPhotoFeedCell = Styled.div<StyledProps>`

  margin: 0 1.25rem 1.875rem 0;

  header {
    padding-left: 0.0625rem;
    display: flex;
    align-items: center;

    .avatar-img {
      width: 2.25rem;
      height: 2.25rem;
    }

    .user-name {
      width: 7.75rem;
      height: 1.1875rem;
      margin-left: 0.625rem;
      font-family: "AppleSDGothicNeo";
      font-size: 0.9375rem;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.27;
      letter-spacing: normal;
      color: rgba(0, 0, 0, 0.74);
    }
  }

  .image-layout {
    position: relative;
    margin-top: 0.625rem;
    width: 16.75rem;
    height: 16.75rem;

    border-radius: 0.625rem;

    background-image: url("${({photoUrl}) => photoUrl}");
    background-size: contain;
    background-repeat: no-repeat;
  }
`

interface PropsType {
  card: PhotoDto
  isScraped: boolean
  toggleCardScrap: (id) => void
}

export const PhotoFeedCell: React.FunctionComponent<PropsType> = ({
  card,
  isScraped,
  toggleCardScrap
}) => {
  return (
    <StyledPhotoFeedCell
      photoUrl={card.image_url}
    >
      <header>
        <img className="avatar-img" src={card.profile_image_url} />
        <span className="user-name">{card.nickname}</span>
      </header>
      <div className="image-layout">
        <ScrapedButton
          isScraped={isScraped}
          onClick={buildToggleCardScrap(card.id, toggleCardScrap)}
        />
      </div>
    </StyledPhotoFeedCell >
  )
}

function buildToggleCardScrap(id: number, cb: (payload: {id: number}) => void) {
  return () => {
     cb({id})
  }
}
