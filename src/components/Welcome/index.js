// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: true,
  }

  subscribeButton = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      this.setState({isSubscribed: false})
    } else {
      this.setState({isSubscribed: true})
    }
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="greeting">Thank you! Happy Learning</p>
        {isSubscribed ? (
          <button
            className="button"
            onClick={this.subscribeButton}
            type="button"
          >
            Subscribe
          </button>
        ) : (
          <button
            className="button"
            onClick={this.subscribeButton}
            type="button"
          >
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
