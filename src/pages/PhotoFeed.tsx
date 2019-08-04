import * as React from "react"

import {PhotoFeedCards} from "../components/photoFeed"
import {Alarm} from "../components/photoFeed/Alarm"
import {PhotoFeedBody} from "../components/photoFeed/PhotoFeedBody"
import {ScrapToggle} from "../components/photoFeed/ScrapToggle"
import {PhotoFeedContainer} from "../containers/photoFeed/PhotoFeedContainer"

export class PhotoFeed extends React.Component {
  render() {
    return (
      <PhotoFeedBody>
        <PhotoFeedContainer >
          {props => <>
            <div className="photo-feed__tool-layout" >
              <ScrapToggle
                checked={props.isShowOnlyScraped}
                handleClick={props.toggleOnlyScrapPhotoFeeds}
              />
            </div>
            <PhotoFeedCards
              photoFeedProps={props}
            />
            <Alarm message={props.toastMessage} />
          </>}
        </PhotoFeedContainer>
      </PhotoFeedBody>
    )
  }
}
