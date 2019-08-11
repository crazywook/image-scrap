import _ from "lodash"
import * as React from "react"
import InfiniteScroll from "react-infinite-scroller"

import {PhotoFeedActions} from "../../containers/photoFeed/action"
import {PhotoFeedState} from "../../containers/photoFeed/types"
import {PhotoFeedCell} from "./PhotoFeedCell"

// import Styled from "styled-components"

interface PropsType {
  photoFeedProps:
    | PhotoFeedState
    & {
      requestPhotoFeedsCards: typeof PhotoFeedActions.requestPhotoFeedsCards
      toggleCardScrap: typeof PhotoFeedActions.toggleCardScrap
    }
}

export class PhotoFeedCards extends React.PureComponent<PropsType> {

  // shouldComponentUpdate(nextProps) {
  //   return this.props.photoFeedProps.currentPageNumber !== nextProps.photoFeedProps.currentPageNumber
  // }

  render() {

    const {
      cards,
      hasMore,
      requestPhotoFeedsCards,
      currentPageNumber,
      isCardsLoading,
      scrapedIds,
      toggleCardScrap,
      isShowOnlyScraped,
    } = this.props.photoFeedProps

    return <div>
      <InfiniteScroll
        className="photo-feed__photo-row"
        hasMore={hasMore}
        initialLoad={false}
        loadMore={p => {
          isCardsLoading || _.throttle(() => requestPhotoFeedsCards({pageNumber: currentPageNumber + 1}), 250, { leading: false, trailing: true })()
        }}
        threshold={5}
      >
        {_(cards)
          .filter(predicate(isShowOnlyScraped, scrapedIds)
          ).map(card =>
            <PhotoFeedCell
              key={card.id}
              card={card}
              isScraped={scrapedIds.has(card.id)}
              toggleCardScrap={toggleCardScrap}
            />
          ).value()
        }
      </InfiniteScroll>
    </div>
  }
}

function predicate(isShowOnlyScraped: boolean, scrapedIds: Set<number>) {
  return card => {
    if (isShowOnlyScraped) {
      return scrapedIds.has(card.id)
    }
    return true
  }
}
