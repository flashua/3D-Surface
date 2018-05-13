import React from 'react'
import { render } from 'react-dom'
import ViewPort from './ViewPort.js'

class ForToggle extends React.PureComponent {
  state = {
    isHeat: false,
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          style={{ position: 'absolute' }}
          checked={this.state.isHeat}
          onChange={() => this.setState({ isHeat: !this.state.isHeat })}
        />
        <ViewPort isHeat={this.state.isHeat} />
      </div>
    )
  }
}

render(<ForToggle />, document.getElementById('root'))
