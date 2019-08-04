import * as React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"

import RootState from "../../store/redux/state"
import {PhotoFeedActions, requestScrapedIds, toggleOnlyScrapPhotoFeeds} from "./action"
import {PhotoFeedState} from "./types"

type PropertyProps = PhotoFeedState

interface DispatchProps {
  requestPhotoFeedsCards: typeof PhotoFeedActions.requestPhotoFeedsCards
  requestScrapedIds: typeof requestScrapedIds
  requestScrapedIdsAdd: typeof PhotoFeedActions.addScrapedIds
  requestScrapedIdsRemove: typeof PhotoFeedActions.removeScrapedIds
  toggleOnlyScrapPhotoFeeds: typeof toggleOnlyScrapPhotoFeeds
  toggleCardScrap: typeof PhotoFeedActions.toggleCardScrap
}

interface RouterComponentProps {
  children: (props: PropsType) => React.ReactNode
}

type PropsType =
  | DispatchProps
  & RouterComponentProps & PropertyProps

class PhotoFeedContainerComponent extends React.Component<PropsType> {

  componentDidMount() {
    this.props.requestPhotoFeedsCards({
      pageNumber: 1
    })
    this.props.requestScrapedIds()
  }

  render() {
    return this.props.children(this.props)
  }
}

const Container = connect<PropertyProps, DispatchProps, {}, RootState>(
  ({photoFeedState}) => {
    return {
      ...photoFeedState
    }
  },
  (dispatch: any) => bindActionCreators({
    toggleOnlyScrapPhotoFeeds,
    requestPhotoFeedsCards: PhotoFeedActions.requestPhotoFeedsCards,
    requestScrapedIds,
    requestScrapedIdsAdd: PhotoFeedActions.addScrapedIds,
    requestScrapedIdsRemove: PhotoFeedActions.removeScrapedIds,
    toggleCardScrap: PhotoFeedActions.toggleCardScrap,
  }, dispatch)
)(PhotoFeedContainerComponent)

export {Container as PhotoFeedContainer}
