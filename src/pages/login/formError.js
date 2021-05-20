import React, { Component } from 'react'

export default class FormError extends Component {

  constructor(props){
    super(props);
  }

  checkErrForm = () => {
    if(this.props.isHidden) return null;
    return(
      <span className="error-text">{this.props.errorMessage}</span>
    )
  }

  render() {
    return (
      this.checkErrForm()
    )
  }
}
