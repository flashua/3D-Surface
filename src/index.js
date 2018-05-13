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
          checked={this.state.heat}
          onChange={() => this.setState({ heat: !this.state.heat })}
        />
        <ViewPort isHeat={this.state.isHeat} />
      </div>
    )
  }
}

render(<ForToggle />, document.getElementById('root'))
