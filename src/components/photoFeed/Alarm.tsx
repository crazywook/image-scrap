import "react-toastify/dist/ReactToastify.css"

import * as React from "react"
import {toast, ToastContainer} from "react-toastify"

interface PropsType {
  message: string
}

export class Alarm extends React.Component<PropsType> {

  private toastId: number | string = 0

  componentDidUpdate(prevProps: PropsType) {

    if (this.props.message && prevProps.message !== this.props.message) {
      this.toastId && toast.dismiss(this.toastId)
      this.toastId = toast.info(
        this.props.message,
        {
          position: "top-center",
          hideProgressBar: true,
          autoClose: 2500
        }
      )
    }
  }

  render() {
    return (<>
      <ToastContainer />
    </>)
  }
}
