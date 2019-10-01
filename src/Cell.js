import React, { Component } from "react"
class Cell extends Component {
  state = { color: this.props.value }

  colorChange = () => {
    const theColor = "#333"
    this.setState({ color: theColor })
  }
  render() {
    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={this.colorChange}
      ></div>
    )
  }
}
export default Cell
