import React, { Component } from 'react'
import Inline from './Inline';

export default class Classcomp extends Component {
  render() {
    return (
      <div className='clascom'>
      <p className='para'><b>This is created by class component</b></p>
      <p className='exte'>this is created by external css</p>
      <Inline/>
      </div>
    )
  }
}
