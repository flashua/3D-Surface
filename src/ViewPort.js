import React from 'react'
import Scene from './Scene.js'

import VertexSurface from './VertexSurface.js'

export default class ViewPort extends React.PureComponent {
  render() {
    if (this.vertexSurface) {
      this.vertexSurface.material.heat(this.props.heat)
    }

    return <section ref={dom => !this.scene && this.run(dom)} id="surface-keeper" />
  }

  run(dom) {
    const width = document.documentElement.clientWidth
    const height = document.documentElement.clientHeight - 5
    const ratio = width / height
    this.scene = new Scene(dom, { width, height, ratio })

    this.vertexSurface = new VertexSurface()
    this.vertexSurface.visible = true

    this.scene.wrapper.add(this.vertexSurface)
    this.scene.animate()
  }
}
