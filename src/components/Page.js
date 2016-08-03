import React, { PropTypes, Component } from 'react'

export default class Page extends Component {
  render() {
    const { year, post } = this.props
    return <div>
      <p>У тебя {post.length} постов за {year} год</p>
    </div>
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  post: PropTypes.array.isRequired
}

